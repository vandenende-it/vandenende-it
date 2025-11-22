export default async (request, context) => {
  // Handle CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  if (request.method === "OPTIONS") {
    return new Response("OK", { headers });
  }

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers });
  }

  // Get API Keys from Netlify Environment
  const mailerSendApiKey = Netlify.env.get("MAILERSEND_API_KEY");
  const recaptchaSecretKey = Netlify.env.get("RECAPTCHA_SECRET_KEY");

  if (!mailerSendApiKey || !recaptchaSecretKey) {
    console.error("Error: Missing API Keys in Netlify settings.");
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500, headers });
  }

  try {
    const data = await request.json();
    const { name, email, message, token } = data;

    // 1. Validate Input
    if (!name || !email || !message || !token) {
      return new Response(JSON.stringify({ error: "Missing required fields or captcha token" }), { status: 400, headers });
    }

    // 2. Verify reCAPTCHA with Google
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`;
    const verifyResponse = await fetch(verifyUrl, { method: 'POST' });
    const verifyData = await verifyResponse.json();

    // verifyData.score ranges from 0.0 (bot) to 1.0 (human). 
    // 0.5 is a standard threshold.
    if (!verifyData.success || verifyData.score < 0.5) {
      console.warn(`Bot detected. Score: ${verifyData.score}`);
      return new Response(JSON.stringify({ error: "Bot detected. Access denied." }), { status: 403, headers });
    }

    // 3. Send Email via MailerSend
    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Authorization": `Bearer ${mailerSendApiKey}`
      },
      body: JSON.stringify({
        from: { 
          email: "info@vandenende.it", // Verified sender in MailerSend
          name: "VANDENENDE.IT Portfolio" 
        },
        to: [
          { 
            email: "maarten@vandenende.it", 
            name: "Maarten van den Ende" 
          }
        ],
        subject: `[PORTFOLIO] Uplink from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>Incoming Transmission</h3>
          <p><strong>Agent:</strong> ${name}</p>
          <p><strong>Contact:</strong> ${email}</p>
          <p><strong>Security Score:</strong> ${verifyData.score}</p>
          <hr />
          <p><strong>Payload:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("MailerSend API Error:", errorText);
      return new Response(JSON.stringify({ error: "Failed to send email via provider." }), { status: response.status, headers });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });

  } catch (error) {
    console.error("Function Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500, headers });
  }
};
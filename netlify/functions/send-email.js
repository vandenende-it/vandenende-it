export default async (request, context) => {
  // Handle CORS (Cross-Origin Resource Sharing)
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response("OK", { headers });
  }

  // Only allow POST
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers });
  }

  // Get API Key from Netlify Environment Variables
  const apiKey = Netlify.env.get("MAILERSEND_API_KEY");

  if (!apiKey) {
    console.error("Error: MAILERSEND_API_KEY is missing in Netlify settings.");
    return new Response(JSON.stringify({ error: "Server misconfiguration: Missing API Key" }), { status: 500, headers });
  }

  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers });
    }

    // Send to MailerSend
    // IMPORTANT: 'from.email' must be a verified sender in your MailerSend dashboard (e.g., no-reply@vandenende.it)
    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: { 
          email: "info@vandenende.it", // MUST be verified in MailerSend
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
import { ContactFormState } from "../types";

// NOTE: In a production environment, you should NOT call MailerSend directly from the frontend 
// because it exposes your API Token.
// You should use a Netlify Function (serverless backend) to act as a proxy.
// 
// For this demo, we will simulate the fetch call structure.

export const sendEmail = async (data: ContactFormState): Promise<boolean> => {
  console.log("Initiating transmission sequence...", data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock success
  // In real implementation:
  /*
  const response = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.MAILERSEND_API_KEY}`
    },
    body: JSON.stringify({
      from: { email: "info@webfabrik.com", name: "WebFabrik System" },
      to: [{ email: "your-email@example.com", name: "Admin" }],
      subject: `New Comms from ${data.name}`,
      text: data.message,
      html: `<p>${data.message}</p><br>From: ${data.email}`
    })
  });
  return response.ok;
  */
 
  return true;
};

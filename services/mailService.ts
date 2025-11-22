import { ContactFormState } from "../types";

export const sendEmail = async (data: ContactFormState, token: string): Promise<boolean> => {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        token // Pass the reCAPTCHA token to the backend
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Email Transmission Failed:", errorData);
      return false;
    }

    const result = await response.json();
    return result.success === true;

  } catch (error) {
    console.error("Network Error during Transmission:", error);
    return false;
  }
};
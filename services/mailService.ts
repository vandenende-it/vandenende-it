import { ContactFormState } from "../types";

export const sendEmail = async (data: ContactFormState): Promise<boolean> => {
  // 1. Check if we are running locally or in production
  // If locally, you might want to keep using the mock OR use 'netlify dev' to test functions.
  
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
    
    // Fallback: If the function doesn't exist (e.g. running locally without netlify dev), 
    // we return false so the UI shows an error.
    return false;
  }
};
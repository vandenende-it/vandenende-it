// Client-side service for AI Terminal
// NOTE: All logic and API keys have been moved to netlify/functions/ai-chat.js for security.

export const sendToGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch('/.netlify/functions/ai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      console.error("AI Backend Error:", response.statusText);
      return "ERROR: SECURE_LINK_FAILED. CHECK CONNECTION.";
    }

    const data = await response.json();
    return data.text || "ERROR: EMPTY_PACKET_RECEIVED";
    
  } catch (error) {
    console.error("Network Error:", error);
    return "CRITICAL FAILURE. NEURAL LINK SEVERED.";
  }
};
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const { prompt } = JSON.parse(event.body);

    console.log("Prompt received:", prompt);

    const response = await fetch("https://api-inference.huggingface.co/Salesforce/codegen2-1B", {
      method: "POST",
      headers: { 
        "Authorization": `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 256 } })
    });

    const result = await response.json();

    console.log("Hugging Face response:", result);

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ code: result[0]?.generated_text || "No response from model." })
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Unknown error" })
    };
  }
};

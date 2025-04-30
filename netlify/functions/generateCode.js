const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { prompt } = JSON.parse(event.body);
  const response = await fetch("https://api-inference.huggingface.co/models/Salesforce/codegen-350M-mono", {
    method: "POST",
    headers: { 
      "Authorization": `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 256 } })
  });
  const result = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ code: result[0]?.generated_text })
  };
};

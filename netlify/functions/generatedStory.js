const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { prompt } = JSON.parse(event.body);
  const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
    method: "POST",
    headers: { 
      "Authorization": `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 150 } })
  });
  const result = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ story: result[0]?.generated_text })
  };
};

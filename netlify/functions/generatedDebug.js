const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { prompt } = JSON.parse(event.body);
  const augmentedPrompt = `Identify bugs or issues in the following code or scenario:\n${prompt}`;
  const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
    method: "POST",
    headers: { 
      "Authorization": `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: augmentedPrompt, parameters: { max_new_tokens: 100 } })
  });
  const result = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ analysis: result[0]?.generated_text })
  };
};

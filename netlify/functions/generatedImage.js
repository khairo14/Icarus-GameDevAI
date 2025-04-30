const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { prompt } = JSON.parse(event.body);
  const res = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.HUGGINGFACE_TOKEN}`
    },
    body: JSON.stringify({ inputs: prompt })
  });
  const arrayBuffer = await res.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");
  return {
    statusCode: 200,
    body: JSON.stringify({ image: `data:image/png;base64,${base64}` })
  };
};

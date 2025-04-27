const axios = require('axios');

const API_KEY = "0000000000"; // optional, no login needed for simple use

async function generateImage(prompt) {
    const response = await axios.post('https://stablehorde.net/api/v2/generate/async', {
        prompt: prompt,
        params: {
            n: 1,
            width: 512,
            height: 512,
            sampler_name: "k_euler_a",
            steps: 20,
            cfg_scale: 8
        },
    }, {
        headers: {
            "apikey": API_KEY
        }
    });
    return response.data;
}

module.exports = { generateImage };

const { askOllama } = require('../services/ollamaService');
const { generateImage } = require('../services/stablehordeService');

async function chatWithAI(prompt, type) {
    if (type === "art") {
        const imageResponse = await generateImage(prompt);
        return JSON.stringify(imageResponse);
    }

    const systemPrompt = getSystemPrompt(type);
    const fullPrompt = `${systemPrompt}\n\nUser Request: ${prompt}`;
    const reply = await askOllama(fullPrompt);
    return reply;
}

function getSystemPrompt(type) {
    switch (type) {
        case "code":
            return `You are a professional Unity game developer. Write C# scripts for Unity 6. 
Focus on clean, efficient, and modern Unity coding practices.`;
        case "level":
            return `You are a procedural content generator for games. Design ideas for maps, dungeons, or terrains.
Describe layout logic, obstacles, and interesting elements.`;
        case "art":
            return `You assist in creating prompts for AI art generation for games, including textures, character designs, and icons.`;
        case "dialogue":
            return `You are a fantasy game story writer. Write rich dialogue, character interactions, and quest lore.`;
        case "testing":
            return `You are an automated game tester. Plan how to auto-play a Unity game, detect bugs, and suggest testing scripts.`;
        case "npc":
            return `You design smart NPC behaviors for Unity. Create behavior trees, AI patterns (attack, defend, patrol), and explain logic clearly.`;
        default:
            return `You are an AI assistant for game development tasks. Help with Unity, design, testing, and asset creation.`;
    }
}

module.exports = { chatWithAI };

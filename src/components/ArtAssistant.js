import React, { useState } from 'react';

export default function ArtAssistant() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const handleGenerate = async () => {
    const res = await fetch('/.netlify/functions/generateImage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setImageUrl(data.image);
  };

  return (
    <div>
      <h2>AI Art/Asset Assistant</h2>
      <input
        type="text"
        placeholder="Enter image prompt"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate Image</button>
      {imageUrl && <div>
        <h3>Result:</h3>
        <img src={imageUrl} alt="Generated" style={{ maxWidth: '256px' }} />
      </div>}
    </div>
  );
}

import React, { useState } from 'react';

export default function DialogueWriter() {
  const [prompt, setPrompt] = useState("");
  const [dialogue, setDialogue] = useState("");

  const handleGenerate = async () => {
    const res = await fetch('/.netlify/functions/generateStory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setDialogue(data.story || "");
  };

  return (
    <div>
      <h2>AI Dialogue/Story Writer</h2>
      <textarea
        rows="3" cols="50"
        placeholder="Enter prompt for story/dialogue"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      ></textarea>
      <br/>
      <button onClick={handleGenerate}>Generate Text</button>
      <h3>Result:</h3>
      <div style={{whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '5px'}}>
        {dialogue}
      </div>
    </div>
  );
}

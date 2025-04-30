import React, { useState } from 'react';

export default function NPCBehavior() {
  const [prompt, setPrompt] = useState("");
  const [behaviorCode, setBehaviorCode] = useState("");

  const handleGenerate = async () => {
    const res = await fetch('/.netlify/functions/generateNPC', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setBehaviorCode(data.code || "");
  };

  return (
    <div>
      <h2>AI NPC Behavior Generator</h2>
      <textarea
        rows="3" cols="50"
        placeholder="Describe NPC behavior to generate"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      ></textarea>
      <br/>
      <button onClick={handleGenerate}>Generate Behavior Code</button>
      <h3>Generated Code:</h3>
      <pre>{behaviorCode}</pre>
    </div>
  );
}

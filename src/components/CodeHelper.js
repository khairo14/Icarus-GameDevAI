import React, { useState } from 'react';

export default function CodeHelper() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");

  const handleGenerate = async () => {
    const res = await fetch('/.netlify/functions/generateCode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setCode(data.code || "No code generated.");
  };

  return (
    <div>
      <h2>AI Code Helper</h2>
      <textarea
        rows="3"
        cols="50"
        placeholder="Enter prompt for code generation"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      ></textarea>
      <br/>
      <button onClick={handleGenerate}>Generate Code</button>
      <h3>Generated Code:</h3>
      <pre>{code}</pre>
    </div>
  );
}

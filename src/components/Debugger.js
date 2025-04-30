import React, { useState } from 'react';

export default function Debugger() {
  const [scenario, setScenario] = useState("");
  const [analysis, setAnalysis] = useState("");

  const handleAnalyze = async () => {
    const res = await fetch('/.netlify/functions/generateDebug', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: scenario })
    });
    const data = await res.json();
    setAnalysis(data.analysis || "");
  };

  return (
    <div>
      <h2>AI Testing/Debugging Bot</h2>
      <textarea
        rows="3" cols="50"
        placeholder="Enter code or scenario"
        value={scenario}
        onChange={e => setScenario(e.target.value)}
      ></textarea>
      <br/>
      <button onClick={handleAnalyze}>Analyze for Issues</button>
      <h3>Analysis:</h3>
      <div style={{whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '5px'}}>
        {analysis}
      </div>
    </div>
  );
}

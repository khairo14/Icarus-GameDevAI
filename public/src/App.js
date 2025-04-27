import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [type, setType] = useState('code');

  const handleAsk = async () => {
    const res = await axios.post('/api/ask', { prompt, type });
    setResponse(res.data.response);
  };

  return (
    <div className="App">
      <h1>Unity AI Dashboard</h1>
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="code">Code Helper</option>
        <option value="level">Level Designer</option>
        <option value="art">Art/Assets</option>
        <option value="dialogue">Dialogue Writer</option>
        <option value="testing">Testing Bot</option>
        <option value="npc">NPC Behavior</option>
      </select>
      <textarea 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Type your prompt..." 
        rows="5"
      />
      <button onClick={handleAsk}>Ask AI</button>

      <h2>Response:</h2>
      <textarea 
        value={response} 
        readOnly 
        rows="10"
      />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import CodeHelper from './components/CodeHelper';
import LevelDesigner from './components/LevelDesigner';
import ArtAssistant from './components/ArtAssistant';
import DialogueWriter from './components/DialogueWriter';
import Debugger from './components/Debugger';
import NPCBehavior from './components/NPCBehavior';

function App() {
  return (
    <div className="App">
      <h1>🎮 AI Toolkit for 3D MMORPG</h1>
      <p>Unity-integrated AI assistant using Hugging Face models</p>

      <section>
        <h2>1. Code Helper AI</h2>
        <CodeHelper />
      </section>

      <section>
        <h2>2. Level Design AI</h2>
        <LevelDesigner />
      </section>

      <section>
        <h2>3. Art/Asset Assistant</h2>
        <ArtAssistant />
      </section>

      <section>
        <h2>4. Dialogue/Story Writer</h2>
        <DialogueWriter />
      </section>

      <section>
        <h2>5. Testing/Debugger Bot</h2>
        <Debugger />
      </section>

      <section>
        <h2>6. NPC Behavior AI</h2>
        <NPCBehavior />
      </section>

      <footer style={{ marginTop: '4rem', opacity: 0.7 }}>
        <small>Made with ❤️ using React, Netlify & Hugging Face</small>
      </footer>
    </div>
  );
}

export default App;

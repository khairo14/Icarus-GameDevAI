import React from 'react';

export default function LevelDesigner() {
  // This example shows how one might integrate the level designer UI.
  // For demonstration, we simply describe the level. In practice, Unity handles actual generation.
  const description = "Use the Unity Editor's Level Designer tool to generate the dungeon map.";
  return (
    <div>
      <h2>AI Level Designer</h2>
      <p>{description}</p>
      <p>(Click the button in Unity to generate a level.)</p>
    </div>
  );
}

import React from 'react';

function Skills({ skills }) {
  if (!skills || !Array.isArray(skills)) {
    return <p>No skills available.</p>;
  }

  return (
    <section>
      <h2>Key Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

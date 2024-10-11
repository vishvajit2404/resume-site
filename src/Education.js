import React from 'react';

function Education({ education }) {
  if (!education || !Array.isArray(education)) {
    return <p>No education information available.</p>;
  }

  return (
    <section>
      <h2>Education</h2>
      {education.map((ed, index) => (
        <div key={index}>
          <h3>{ed.degree}</h3>
          <p>{ed.university}</p>
          <p>{ed.year}</p>
          <p>GPA: {ed.gpa}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;

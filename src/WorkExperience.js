import React from 'react';

function WorkExperience({ workExperience }) {
  if (!workExperience || !Array.isArray(workExperience)) {
    return <p>No work experience available.</p>;
  }

  return (
    <section>
      <h2>Work Experience</h2>
      {workExperience.map((job, index) => (
        <div key={index}>
          <h3>{job.title}</h3>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;

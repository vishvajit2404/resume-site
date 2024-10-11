import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

function App() {
  const [resumeData] = useState({
    name: 'Zh Rimel',
    email: 'abc@gmail.com',
    mobile: '01234567890',
    web: 'abc.github.io/abc',
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    workExperience: [
      {
        title: 'Job Title at Company',
        duration: 'August 2022 – December 2023',
        description: 'Lorem ipsum dolor sit amet...',
      },
      {
        title: 'Job Title 2 at Company 2',
        duration: 'August 2020 – December 2021',
        description: 'Lorem ipsum dolor sit amet...',
      }
    ],
    skills: ['A Key skill', 'A Key skill', 'A Key skill'],
    education: [
      {
        degree: 'BS in Computer Science',
        year: '2018 - 2022',
        gpa: '3.9',
        university: 'New Jersey Institute of Technology',
      },
      {
        degree: 'MS in Data Science',
        year: '2022 - 2023',
        gpa: '4.0',
        university: 'New Jersey Institute of Technology',
      }
    ]
  });

  return (
    <div className="App">
      <Header name={resumeData.name} email={resumeData.email} mobile={resumeData.mobile} web={resumeData.web} />
      <PersonalProfile profile={resumeData.profile} />
      <WorkExperience workExperience={resumeData.workExperience} />
      <Skills skills={resumeData.skills} />
      <Education education={resumeData.education} />
    </div>
  );
}

export default App;

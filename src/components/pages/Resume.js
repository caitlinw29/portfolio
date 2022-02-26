import React from 'react';

export default function Resume() {
  return (
    <div className='px-5 py-4'>
      <h1>Resume</h1>
      <a href={process.env.PUBLIC_URL + '/CaitlinWall_Resume.pdf'} target="_blank" rel='noreferrer'>View my resume here</a>
      <p>Front-end Proficiencies</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap/Materialize</li>
      </ul>
      <p>Back-end Proficiencies</p>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>mySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

    </div>
  );
}
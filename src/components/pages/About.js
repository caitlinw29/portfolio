import React from 'react';

export default function About() {
  return (
    <div className='px-5 py-4'>
      <h1>About Me</h1>
      <div className='d-flex justify-content-center'>
        <img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt="Caitlin" />

        <p className='px-4'>
        Hi! I'm Caitlin, a teacher turned techie! I have experience in the MERN stack and love to explore new technologies.
        </p>
        
       
      </div> 
    </div>
  );
}
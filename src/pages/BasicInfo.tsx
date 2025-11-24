import React from 'react';

export const BasicInfo: React.FC = () => {
  return (
    <div className="page-container">
      <h1>About Me</h1>

      <p>
        My name is <strong>Katsia Ilunga</strong>, an entry-level full-stack web developer
        completing a Full-Stack Web Development diploma at Red River College College College (2026).
      </p>

      <p>
        I have strong skills in front-end development using React, JavaScript, HTML, and CSS,
        expanding knowledge in back-end technologies such as Node.js and NestJS. I enjoy building
        interactive applications, troubleshooting issues, and continuously growing through hands-on
        learning.
      </p>

      <p>I have experience with Git/GitHub collaboration, Docker, PostgreSQL, and testing tools.</p>

      <h2>Contact</h2>
      <ul>
        <li>
          <strong>Email:</strong> katsiailunga@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> 204-996-5560
        </li>
        <li>
          <strong>Location:</strong> Winnipeg, MB
        </li>
      </ul>
    </div>
  );
};

export default BasicInfo;

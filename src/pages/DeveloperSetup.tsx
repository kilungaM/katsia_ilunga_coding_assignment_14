import React from 'react';

export const DeveloperSetup: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Developer Setup</h1>

      <h2>VSCode Setup</h2>
      <p>
        I primarily use Visual Studio Code for development, with extensions that support React, code
        formatting, and debugging.
      </p>
      <ul>
        <li>ESLint</li>
        <li>Prettier</li>
        <li>GitLens</li>
        <li>Docker Extension</li>
        <li>React Developer Tools</li>
      </ul>

      <h2>Terminal Setup</h2>
      <p>
        I mainly use the terminal built into VSCode for commands such as project builds, development
        servers, managing Git, and running Docker containers.
      </p>
      <ul>
        <li>
          <code>npm install</code>
        </li>
        <li>
          <code>npm run build</code>
        </li>
        <li>
          <code>npm test</code>
        </li>
        <li>
          <code>docker build ...</code>
        </li>
        <li>
          <code>git commit -m "message"</code>
        </li>
      </ul>

      <h2>Preferred Font</h2>
      <p>
        I prefer using clean and readable fonts like "Fira Code", which includes helpful
        programming.
      </p>

      <h2>Development Environment</h2>
      <p>I use a consistent workflow that includes:</p>
      <ul>
        <li>React for building the frontend</li>
        <li>Jest for unit testing</li>
        <li>Docker for containerized deployments</li>
        <li>GitHub for version control and collaboration</li>
        <li>Husky and Prettier to maintain high code standards</li>
      </ul>

      <p>
        This setup allows me to maintain consistent formatting, version control, and development
        builds for deployment.
      </p>
    </div>
  );
};

export default DeveloperSetup;

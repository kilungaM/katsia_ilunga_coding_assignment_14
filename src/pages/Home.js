import React from 'react';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home" style={{ textAlign: 'center', padding: '40px' }}>
      {/* Header */}
      <Text content="Welcome to My Portfolio" type="h1" data-testid="welcome-text" />

      {/* Subheader */}
      <Text
        content="This portfolio showcases my work, skills, and resources from my projects."
        data-testid="subheader-text"
      />

      {/* Buttons */}
      <div
        className="home-buttons"
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}
      >
        <Button onClick={() => navigate('/work')} label="Work" />
        <Button onClick={() => navigate('/skills')} label="Skills" />
        <Button onClick={() => navigate('/resources')} label="Resources" />
      </div>

      {/* Optional "My Work" title only */}
      <h2 style={{ marginTop: '40px' }}>My Work</h2>
    </div>
  );
}

export default Home;

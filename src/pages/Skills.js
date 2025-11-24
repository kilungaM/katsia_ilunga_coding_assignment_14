import React from 'react';
import { Card } from '../components/Card';
import skills from '../data/skills';

function Skills() {
  return (
    <div className="grid">
      {skills.map((skill, idx) => (
        <Card
          key={idx}
          title={skill.name}
          description={skill.description}
          tech={[skill.level]} // Show level as tech
        />
      ))}
    </div>
  );
}

export default Skills;

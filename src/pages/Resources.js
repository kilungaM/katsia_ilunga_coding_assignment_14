import React from 'react';
import { Card } from '../components/Card';
import resources from '../data/resources';

function Resources() {
  return (
    <div className="grid">
      {resources.map((resource, idx) => (
        <Card
          key={idx}
          title={resource.title}
          description={resource.summary}
          image={resource.image}
          link={resource.link}
        />
      ))}
    </div>
  );
}

export default Resources;

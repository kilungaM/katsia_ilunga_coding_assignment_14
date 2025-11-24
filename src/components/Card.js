import React from 'react';
import { Text } from './Text';
import { Img } from './Img';
import { Button } from './Button';
import './Card.css';

export const Card = ({ title, image, tech, link }) => {
  return (
    <div className="card">
      {image && <Img src={image} alt={title} />}
      {title && <Text content={title} type="h3" />}
      {tech && <Text content={`Tech: ${tech.join(', ')}`} />}
      {link && <Button onClick={() => window.open(link, '_blank')} label="View" />}
    </div>
  );
};

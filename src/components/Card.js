import React from 'react';
import { Text } from './Text';
import { Img } from './Img';
import { Button } from './Button';
import './Card.css';

export const Card = ({ title, image, description, tech, extraLines, link }) => {
  return (
    <div className="card">
      {image && <Img src={image} alt={title} />}

      {/* Title */}
      {title && <Text content={title} type="h3" />}

      {/* Description */}
      {description && <Text content={description} data-testid="description" />}

      {/* Tech list */}
      {tech && tech.length > 0 && <Text content={`Tech: ${tech.join(', ')}`} data-testid="tech" />}

      {/* Extra lines */}
      {extraLines && extraLines.length > 0 && (
        <div>
          {extraLines.map((line, i) => (
            <Text key={i} content={line} data-testid="extra-line" />
          ))}
        </div>
      )}

      {/* Clickable link instead of button for tests */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" data-testid="link">
          <Button label="View" />
        </a>
      )}
    </div>
  );
};

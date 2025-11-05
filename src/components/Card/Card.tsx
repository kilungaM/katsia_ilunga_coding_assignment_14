import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{
  disabled?: boolean;
  backgroundColor?: string;
  padding?: string;
  shadow?: boolean;
  borderRadius?: string;
}>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#ffffff')};
  padding: ${(props) => props.padding || '1.5rem'};
  border-radius: ${(props) => props.borderRadius || '8px'};
  border: 1px solid ${(props) => (props.disabled ? '#bdbdbd' : '#e0e0e0')};
  box-shadow: ${(props) => {
    if (props.disabled) return 'none';
    if (props.shadow) return '0 4px 6px rgba(0, 0, 0, 0.1)';
    return 'none';
  }};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    box-shadow: ${(props) => {
      if (props.disabled) return 'none';
      if (props.shadow) return '0 6px 12px rgba(0, 0, 0, 0.15)';
      return 'none';
    }};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.padding || '1rem'};
  }
`;

export const Card: React.FC<CardProps> = ({
  children,
  disabled = false,
  backgroundColor,
  padding,
  shadow = true,
  borderRadius,
  className,
}) => {
  return (
    <StyledCard
      disabled={disabled}
      backgroundColor={backgroundColor}
      padding={padding}
      shadow={shadow}
      borderRadius={borderRadius}
      className={className}
    >
      {children}
    </StyledCard>
  );
};

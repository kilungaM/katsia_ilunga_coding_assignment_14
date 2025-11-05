import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>`
  padding: 12px 24px;
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor || '#007bff')};
  color: ${(props) => (props.disabled ? '#666666' : '#ffffff')};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.85)};
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      data-testid="button"
    >
      {label}
    </StyledButton>
  );
};

import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || 'transparent'};
  padding: 4px 8px;
  margin-bottom: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="label"
    >
      {text}
    </StyledLabel>
  );
};

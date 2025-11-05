import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ disabled?: boolean; backgroundColor?: string; fontSize?: string }>`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
  background-color: ${(props) =>
    props.disabled ? '#f5f5f5' : props.backgroundColor || 'transparent'};
  padding: 8px;
  margin: 8px 0;
  line-height: 1.5;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.fontSize ? `calc(${props.fontSize} * 0.9)` : '14px')};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => (props.fontSize ? `calc(${props.fontSize} * 0.8)` : '13px')};
  }
`;

export const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  backgroundColor,
  fontSize,
}) => {
  return (
    <StyledText
      disabled={disabled}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      data-testid="text"
    >
      {content}
    </StyledText>
  );
};

import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  display: block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  width,
  height,
  className,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      width={width}
      height={height}
      className={className}
    />
  );
};

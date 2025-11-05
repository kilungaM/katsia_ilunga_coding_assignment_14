import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{ disabled?: boolean; height?: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '500px'};
  overflow: hidden;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: ${(props) => (props.height ? `calc(${props.height} * 0.6)` : '300px')};
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, ${(props) => props.opacity});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 0 0 1rem 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  disabled = false,
  height,
  overlayOpacity = 0.4,
  className,
}) => {
  return (
    <HeroContainer disabled={disabled} height={height} className={className}>
      <HeroImg src={src} alt={alt} />
      {(title || subtitle) && (
        <Overlay opacity={overlayOpacity}>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Overlay>
      )}
    </HeroContainer>
  );
};

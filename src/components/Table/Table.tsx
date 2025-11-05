import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean; backgroundColor?: string }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : props.backgroundColor || '#ffffff')};
  border: 1px solid ${(props) => (props.disabled ? '#cccccc' : '#dddddd')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Table: React.FC<TableProps> = ({ children, disabled = false, backgroundColor }) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor} data-testid="table">
      {children}
    </StyledTable>
  );
};

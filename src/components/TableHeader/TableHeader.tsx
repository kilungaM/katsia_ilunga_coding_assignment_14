import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.th<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 12px;
  text-align: left;
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#f8f9fa')};
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
  font-weight: 600;
  border: 1px solid ${(props) => (props.disabled ? '#cccccc' : '#dddddd')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableHeader
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="table-header"
    >
      {children}
    </StyledTableHeader>
  );
};

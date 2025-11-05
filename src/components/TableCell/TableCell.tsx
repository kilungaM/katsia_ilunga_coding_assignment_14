import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 12px;
  background-color: ${(props) =>
    props.disabled ? '#f5f5f5' : props.backgroundColor || 'transparent'};
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
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

export const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableCell disabled={disabled} backgroundColor={backgroundColor} data-testid="table-cell">
      {children}
    </StyledTableCell>
  );
};

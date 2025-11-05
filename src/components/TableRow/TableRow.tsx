import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) =>
    props.disabled ? '#f5f5f5' : props.backgroundColor || 'transparent'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#f5f5f5' : '#f8f9fa')};
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableRow disabled={disabled} backgroundColor={backgroundColor} data-testid="table-row">
      {children}
    </StyledTableRow>
  );
};

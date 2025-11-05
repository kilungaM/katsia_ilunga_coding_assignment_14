import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#f8f9fa')};
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  td {
    padding: 12px;
    border: 1px solid ${(props) => (props.disabled ? '#cccccc' : '#dddddd')};
  }

  @media (max-width: 768px) {
    td {
      padding: 10px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    td {
      padding: 8px;
      font-size: 12px;
    }
  }
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableFooter
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="table-footer"
    >
      {children}
    </StyledTableFooter>
  );
};

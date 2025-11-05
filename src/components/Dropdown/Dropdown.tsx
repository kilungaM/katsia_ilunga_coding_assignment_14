import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 10px 12px;
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
  border: 1px solid ${(props) => (props.disabled ? '#cccccc' : '#dddddd')};
  border-radius: 4px;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  min-width: 200px;

  &:hover {
    border-color: ${(props) => (props.disabled ? '#cccccc' : '#007bff')};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.disabled ? '#cccccc' : '#007bff')};
    box-shadow: ${(props) => (props.disabled ? 'none' : '0 0 0 3px rgba(0,123,255,0.1)')};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 10px;
    min-width: 180px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 7px 9px;
    min-width: 150px;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  disabled = false,
  backgroundColor,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledSelect
      disabled={disabled}
      backgroundColor={backgroundColor}
      onChange={handleChange}
      data-testid="dropdown"
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

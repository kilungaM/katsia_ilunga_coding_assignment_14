export interface DropdownProps {
  options: string[];
  placeholder?: string;
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: (value: string) => void;
}

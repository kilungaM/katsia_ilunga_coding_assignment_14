import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the button',
    },
    label: {
      control: 'text',
      description: 'Button text label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    backgroundColor: '#007bff',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color',
    backgroundColor: '#28a745',
    disabled: false,
  },
};

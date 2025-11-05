import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Card background color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    padding: {
      control: 'text',
      description: 'Card padding',
    },
    shadow: {
      control: 'boolean',
      description: 'Show shadow',
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3>Card Title</h3>
        <p>This is a default card with some content inside it.</p>
      </>
    ),
    disabled: false,
    shadow: true,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <h3>Disabled Card</h3>
        <p>This card is in a disabled state.</p>
      </>
    ),
    disabled: true,
    shadow: true,
  },
};

export const CustomBackground: Story = {
  args: {
    children: (
      <>
        <h3 style={{ color: 'white' }}>Custom Card</h3>
        <p style={{ color: 'white' }}>Card with custom background color.</p>
      </>
    ),
    backgroundColor: '#4a90e2',
    disabled: false,
    shadow: true,
  },
};

export const NoShadow: Story = {
  args: {
    children: (
      <>
        <h3>Card Without Shadow</h3>
        <p>This card has no shadow effect.</p>
      </>
    ),
    disabled: false,
    shadow: false,
  },
};

export const CustomPadding: Story = {
  args: {
    children: (
      <>
        <h3>Large Padding Card</h3>
        <p>This card has extra padding.</p>
      </>
    ),
    disabled: false,
    padding: '3rem',
    shadow: true,
  },
};

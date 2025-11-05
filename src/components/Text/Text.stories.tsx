import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    fontSize: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is some text content.',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'This is disabled text.',
    disabled: true,
  },
};

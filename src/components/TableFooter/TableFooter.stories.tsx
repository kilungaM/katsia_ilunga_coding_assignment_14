import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <tr>
        <td>Footer Content</td>
        <td>Footer Data</td>
      </tr>
    ),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <tr>
        <td>Disabled Footer</td>
        <td>Disabled Data</td>
      </tr>
    ),
    disabled: true,
  },
};

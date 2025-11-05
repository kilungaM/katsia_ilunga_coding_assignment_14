import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Hero image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    title: {
      control: 'text',
      description: 'Hero title text',
    },
    subtitle: {
      control: 'text',
      description: 'Hero subtitle text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    height: {
      control: 'text',
      description: 'Hero image height',
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Overlay opacity',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/1920x500',
    alt: 'Hero banner',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing content',
    disabled: false,
    overlayOpacity: 0.4,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1920x500',
    alt: 'Hero banner',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing content',
    disabled: true,
    overlayOpacity: 0.4,
  },
};

export const NoText: Story = {
  args: {
    src: 'https://via.placeholder.com/1920x500',
    alt: 'Hero banner without text',
    disabled: false,
  },
};

export const CustomHeight: Story = {
  args: {
    src: 'https://via.placeholder.com/1920x700',
    alt: 'Tall hero banner',
    title: 'Large Hero Section',
    subtitle: 'With custom height',
    height: '700px',
    disabled: false,
    overlayOpacity: 0.5,
  },
};

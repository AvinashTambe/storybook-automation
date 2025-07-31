import { fn } from 'storybook/test';
import { Button } from './Button';
import './button.css';
import { FaArrowRight } from 'react-icons/fa';
import React from 'react';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    size: {
      control: 'select',
      options: ['Small', 'medium', 'Large']
    },
    variant: {
      control: 'select',
      options: ['Primary', 'Secondary', 'Tertiary']
    },
    type: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    },
    icon: {
      control: 'text',
    },
  }
};

// Basic button variations
export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Tertiary = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
  },
};

// Size variations
export const Small = {
  args: {
    label: 'Small Button',
    variant: 'primary',
  },
};

export const Medium = {
  args: {
    label: 'Medium Button',
    variant: 'primary',
  },
};

export const Large = {
  args: {
    label: 'Large Button',
    variant: 'primary',
  },
};

// With Icons
export const WithLeftIcon = {
  args: {
    label: 'Button with Left Icon',
    variant: 'primary',
    icon: <FaArrowRight />,
    iconPosition: 'left',
  },
};

export const WithRightIcon = {
  args: {
    label: 'Button with Right Icon',
    variant: 'primary',
    icon: <FaArrowRight />,
    iconPosition: 'right',
  },
};

// Combined variations
export const LargeSecondaryWithIcon = {
  args: {
    label: 'Large Secondary with Icon',
    variant: 'secondary',
    icon: <FaArrowRight />,
    iconPosition: 'right',
  },
};

export const SmallTertiaryWithIcon = {
  args: {
    label: 'Small Tertiary with Icon',
    variant: 'tertiary',
    icon: <FaArrowRight />,
    iconPosition: 'left',
  },
};

// Destructive button
export const Destructive = {
  args: {
    label: 'Destructive Button',
    variant: 'primary',
    type: true,
  },
};

export const DynamicIcon = {
  args: {
    label: 'Button with Dynamic Icon',
    variant: 'primary',
    icon: 'FaArrowRight',
    iconPosition: 'left',
  },
};

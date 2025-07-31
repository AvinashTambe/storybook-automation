import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import * as Icons from 'react-icons/fa';

export const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  type = false,
  ...props
}) => {
  const variantClass = `storybook-button--${variant}`;
  const sizeClass = `storybook-button--${size}`;
  const typeClass = type ? 'storybook-button--destructive' : '';
  const className = ['storybook-button', variantClass, sizeClass, typeClass].join(' ');

  const IconComponent = icon && Icons[icon] ? Icons[icon] : null;

  return (
    <button type="button" className={className} {...props}>
      {IconComponent && iconPosition === 'left' && <span className="button-icon left"><IconComponent /></span>}
      <span>{label}</span>
      {IconComponent && iconPosition === 'right' && <span className="button-icon right"><IconComponent /></span>}
    </button>
  );
};

interface ButtonProps {
  /** Text to display inside the button */
  label: string;

  /** Choose the style of button: primary, secondary, or tertiary */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /** Button size: small, medium, or large */
  size?: 'small' | 'medium' | 'large';

  /** Optional icon to display */
  icon?: string;

  /** Position of the icon: left or right */
  iconPosition?: 'left' | 'right';

  /** Click handler function */
  onClick?: () => void;
}


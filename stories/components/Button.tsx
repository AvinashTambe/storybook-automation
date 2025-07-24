import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const variantClass = `storybook-button--${variant}`;
  const sizeClass = `storybook-button--${size}`;
  const className = ['storybook-button', variantClass, sizeClass].join(' ');

  return (
    <button type="button" className={className} {...props}>
      {icon && iconPosition === 'left' && <span className="button-icon left">{icon}</span>}
      <span>{label}</span>
      {icon && iconPosition === 'right' && <span className="button-icon right">{icon}</span>}
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
  icon?: React.ReactNode;

  /** Position of the icon: left or right */
  iconPosition?: 'left' | 'right';

  /** Click handler function */
  onClick?: () => void;
}


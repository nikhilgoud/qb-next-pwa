import React from 'react';

export type IButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC<IButton> = ({ className = '', children, ...rest }) => {
  return (
    <button className={`py-1 px-4 rounded text-white text-lg ${className}`} {...rest} data-testid="btn">
      {children}
    </button>
  );
};

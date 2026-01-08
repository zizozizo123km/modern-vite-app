import React from 'react';
import PropTypes from 'prop-types';

const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-base tracking-wide transition duration-300 ease-in-out transform active:scale-95 focus:outline-none focus:ring-4';

const variants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500/50 shadow-xl shadow-indigo-500/20',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-300/50 border border-slate-200',
  outline: 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500/50',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/50 shadow-xl shadow-red-500/20',
};

/**
 * A versatile button component with predefined styles and hover effects.
 */
const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '', disabled = false }) => {
  const variantStyles = variants[variant] || variants.primary;
  
  const disabledStyles = disabled 
    ? 'opacity-60 cursor-not-allowed shadow-none hover:bg-opacity-60' 
    : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Content displayed inside the button. */
  children: PropTypes.node.isRequired,
  /** Function to call when the button is clicked. */
  onClick: PropTypes.func,
  /** Defines the visual style of the button. */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  /** Specifies the button type (for forms). */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Additional Tailwind CSS classes to apply. */
  className: PropTypes.string,
  /** If true, the button is disabled and unclickable. */
  disabled: PropTypes.bool,
};

export default Button;
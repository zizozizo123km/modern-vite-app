import React from 'react';

/**
 * A reusable input group component featuring label, input field, and error handling.
 * Uses modern Tailwind CSS styling.
 */
const InputGroup = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
}) => {
  const baseClasses =
    'block w-full px-4 py-2 border rounded-lg shadow-sm transition duration-150 ease-in-out sm:text-sm';
  
  const focusClasses = 'focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600';
  
  const errorClasses = error
    ? 'border-red-500 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
    : 'border-gray-300 hover:border-gray-400';

  const disabledClasses = disabled 
    ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
    : 'text-gray-900 bg-white';

  const inputClasses = `${baseClasses} ${errorClasses} ${focusClasses} ${disabledClasses}`;

  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputGroup;
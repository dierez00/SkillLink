import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          ref={ref}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

import React, { ChangeEventHandler, FocusEventHandler } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  id?: string;
  name?: string;
  value?: string;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<IProps> = ({
  className,
  label,
  onChange,
  onBlur,
  maxLength,
  name,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <div className="pb-2 pt-2 w-full relative">
      <label
        htmlFor={props.id}
        className="text-gray-400 focus-within:text-gray-600 label"
      >
        <p className="flex gap-2 text-gray-400 focus-within:text-gray-600 label">
          {label}
        </p>
        <input
          type={type}
          name={name}
          id={props.id}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete="on"
          className={`input w-full h-InputHeight ${className}`}
          {...props}
        />
      </label>
    </div>
  );
};

export default Input;

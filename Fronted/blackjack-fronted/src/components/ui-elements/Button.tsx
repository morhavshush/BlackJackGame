import React, { memo } from "react";

interface IProps {
  title?: any;
  className?: string;
  disabled?: boolean;
  label?: string;
  color?: string;
  errorText?: any | null;
  children?: any | null;
  id?: string;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: any;
  selected?: boolean;
}

const Button: React.FC<IProps> = ({
  title,
  onClick,
  children,
  className,
  disabled = false,
  id,
  name,
  color,
  type = "button",
  errorText,
  selected,
  ...props
}) => {

  return (
      <button
        onClick={onClick}
        className={`relative button h-ButtonHeight flex bg-yellow rounded-2xl ${
          errorText && "border border-rose-600"
        } ${className} ${
          selected
            ? "border-2 border-indigo-600"
            : "border-2 border-transparent"
        }
        ${disabled ? "bg-disable cursor-not-allowed opacity-50" : "opacity-100"}`}
        type={type}
        disabled={disabled}
        {...props}
      >
        <div className="grow">{title}</div>
      </button>
  );
};

export default memo(Button);

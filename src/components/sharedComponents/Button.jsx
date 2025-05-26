import React from "react";

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-teal-700 text-white hover:bg-teal-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-teal-700 text-teal-700 hover:bg-teal-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 w-auto";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary dark:hover:bg-primary/80",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary dark:hover:bg-secondary/80",
    outline:
      "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
    ghost:
      "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm",
    md: "px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base",
    lg: "px-4 py-2 text-base sm:px-5 sm:py-2.5 sm:text-lg",
  };

  const responsiveStyles =
    "whitespace-nowrap overflow-hidden text-ellipsis max-w-full";

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    responsiveStyles,
    disabled && "opacity-50 cursor-not-allowed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

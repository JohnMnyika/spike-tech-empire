import React from "react";
import { motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const buttonVariants = {
  primary:
    "bg-navy-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] hover:bg-navy-900 hover:shadow-[0_16px_36px_rgba(15,23,42,0.22)] active:scale-95 font-medium",
  secondary:
    "bg-blue-600 text-white hover:bg-blue-500 active:scale-95 font-medium shadow-[0_12px_30px_rgba(37,99,235,0.22)]",
  outline:
    "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:text-cyan-400 dark:hover:bg-navy-900/30 font-medium",
  ghost:
    "text-navy-900 dark:text-white hover:bg-navy-100 dark:hover:bg-navy-800 font-medium",
};

const sizeVariants = {
  sm: "px-4 py-2.5 text-sm rounded-xl",
  md: "px-6 py-3 text-[15px] rounded-2xl",
  lg: "px-7 py-3.5 text-base rounded-2xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className="inline-block"
    >
      <button
        className={`
          inline-flex items-center justify-center
          font-medium transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500
          dark:focus:ring-offset-navy-950
          ${buttonVariants[variant]}
          ${sizeVariants[size]}
          ${className}
        `}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    </motion.div>
  );
}

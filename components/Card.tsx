import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "gradient" | "glass";
}

const variantStyles = {
  default: "bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700",
  gradient:
    "bg-gradient-to-br from-navy-50 to-gray-100 dark:from-navy-800 dark:to-navy-900 border border-gray-200 dark:border-navy-700",
  glass:
    "bg-white/10 dark:bg-navy-900/20 backdrop-blur-md border border-white/20 dark:border-navy-700/50",
};

export default function Card({
  children,
  className = "",
  hover = true,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl p-6 shadow-md
        transition-all duration-300
        ${variantStyles[variant]}
        ${
          hover
            ? "hover:shadow-xl hover:scale-105 dark:hover:shadow-cyan-500/10"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

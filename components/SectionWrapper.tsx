import React from "react";

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  center?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
  center = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`
        py-20 sm:py-28 lg:py-32
        ${dark ? "bg-gradient-to-b from-navy-900 to-navy-950 text-white" : "bg-white dark:bg-navy-900"}
        ${className}
      `}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${center ? "text-center" : ""}`}>
        {children}
      </div>
    </section>
  );
}

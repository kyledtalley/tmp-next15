import React from "react";

interface FormWrapperProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormWrapper({ children, onSubmit }: FormWrapperProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 bg-card p-6 rounded-lg shadow-md"
    >
      {children}
    </form>
  );
}

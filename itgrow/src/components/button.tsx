import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode; // Optional icon
}

const Button: React.FC<ButtonProps> = ({ label, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center h-8 gap-2 px-4 py-2 text-base bg-violet-500 text-white font-semibold rounded-xl shadow-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
    >
      {icon && <span>{icon}</span>} {/* Render icon if provided */}
      {label}
    </button>
  );
};

export default Button;

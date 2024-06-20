import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  to: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const ButtonCancel: React.FC<ButtonProps> = ({ to, className, type = 'button' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className={`mb-2 border border-primary mr-2 rounded-lg px-5 py-2.5
        text-sm font-medium text-white hover:bg-gray-100 hover:text-primary focus:z-10 ${className}`}
    >
      Cancelar
    </button>
  );
};

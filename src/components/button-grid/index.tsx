import React from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

interface IButtonProps {
  onClick?: () => void;
  icon: string;
}

export const ButtonGrid: React.FC<IButtonProps> = ({ icon, onClick }) => {
  let iconChosen;
  if (icon === 'edit') {
    iconChosen = <FaRegEdit />;
  } else if (icon === 'delete') {
    iconChosen = <FaTrashAlt />;
  }

  return <button onClick={onClick}>{iconChosen}</button>;
};

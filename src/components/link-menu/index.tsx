import { Link } from 'react-router-dom';

interface ILinkMenuProps {
  to?: string;
  icon?: React.ReactNode;
  label: string;
  children?: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
}

export const LinkMenu: React.FC<ILinkMenuProps> = props => {
  const { icon, label, to, children, onClick, isOpen } = props;

  if (to) {
    return (
      <li className="border-b border-sky-950 text-blue-menu last:border-b-0">
        <Link className="flex gap-2 py-2 " to={to}>
          {icon}
          <span>{label}</span>
        </Link>
      </li>
    );
  } else {
    return (
      <li className="border-b border-sky-950 text-blue-menu ">
        <button className="flex gap-2 py-2" onClick={onClick}>
          {icon}
          <span>{label}</span>
        </button>
        {isOpen && children}
      </li>
    );
  }
};

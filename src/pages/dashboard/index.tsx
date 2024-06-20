import { FaUser } from 'react-icons/fa';
import { BoxResume } from '../../components/box-resume';

export const Dashboard = () => {
  return (
    <div className="flex justify-between w-full">
      <BoxResume label="Usuários" icon={<FaUser />} count={25} />
      <BoxResume label="Usuários" icon={<FaUser />} count={25} />
      <BoxResume label="Usuários" icon={<FaUser />} count={25} />
      <BoxResume label="Usuários" icon={<FaUser />} count={25} />
    </div>
  );
};

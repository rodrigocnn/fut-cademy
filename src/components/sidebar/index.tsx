import { FaLayerGroup, FaUser } from 'react-icons/fa';
import { MdBarChart } from 'react-icons/md';
import { PiSoccerBallBold } from 'react-icons/pi';
import { RiEditBoxLine, RiMoneyDollarBoxFill } from 'react-icons/ri';

import { LinkMenu } from '../link-menu';
import { useState } from 'react';

export const Sidebar = () => {
  const [menuState, setMenuState] = useState<{ [key: string]: boolean }>({
    categorias: false,
    groups: false,
    students: false,
    users: false,
  });

  const toggleMenu = (menuName: string) => {
    setMenuState({ ...menuState, [menuName]: !menuState[menuName] });
  };

  return (
    <div className="w-1/4 bg-primary text-white p-8">
      <h1 className="text-2xl font-semibold">Menu</h1>
      <ul className="mt-4">
        <LinkMenu label={'Página Inicial'} to="/" icon={<MdBarChart />} />
        <LinkMenu
          isOpen={menuState.categorias}
          onClick={() => toggleMenu('categorias')}
          label={'Categorias'}
          icon={<RiEditBoxLine />}
        >
          <ul className="px-6 pb-3 ">
            <LinkMenu label={'Todas Categorias'} to="/categories" />
            <LinkMenu label={'Nova Categoria'} to="/categories/create" />
          </ul>
        </LinkMenu>

        <LinkMenu
          isOpen={menuState.groups}
          onClick={() => toggleMenu('groups')}
          label={'Turmas'}
          icon={<FaLayerGroup />}
        >
          <ul className="px-6 pb-3">
            <LinkMenu label={'Todas as Turmas'} to="/groups/" />
            <LinkMenu label={'Nova Turma'} to="/groups/create" />
          </ul>
        </LinkMenu>
        <LinkMenu
          isOpen={menuState.students}
          onClick={() => toggleMenu('students')}
          label={'Alunos'}
          icon={<PiSoccerBallBold />}
        >
          <ul className="px-6 pb-3">
            <LinkMenu label={'Todos Alunos'} to="/students" />
            <LinkMenu label={'Novo Aluno'} to="/students/create" />
          </ul>
        </LinkMenu>
        <LinkMenu label={'Financeiro'} to="/categories" icon={<RiMoneyDollarBoxFill />} />
        <LinkMenu label={'Usuários'} to="/groups" icon={<FaUser />} />
      </ul>
    </div>
  );
};

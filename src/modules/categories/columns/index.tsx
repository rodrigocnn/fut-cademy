import { ButtonGrid } from '../../../components/button-grid';
import { Category } from '../models';

interface IRenderCol {
  data: Category;
}

export const columnsCategories = (openDeleteConfirm: (id: number) => void, editRegister: (data: Category) => void) => [
  {
    header: 'Código Categoria',
    name: 'id',
    minWidth: 50,
    defaultFlex: 2,
  },
  {
    header: 'Nome da Categoria',
    name: 'name',
    minWidth: 50,
    defaultFlex: 2,
  },
  {
    header: 'Editar',
    name: 'idEdit',
    maxWidth: 1000,
    defaultFlex: 1,
    render: ({ data }: IRenderCol) => <ButtonGrid key={data.id} icon="edit" onClick={() => editRegister(data)} />,
  },

  {
    header: 'Excluir',
    name: 'idDelete',
    maxWidth: 1000,
    defaultFlex: 1,
    render: ({ data }: IRenderCol) => {
      return <ButtonGrid key={data.id} icon="delete" onClick={() => openDeleteConfirm(data.id)} />;
    },
  },
];

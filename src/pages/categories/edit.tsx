import { HeaderPage } from '../../components/header-page';
import { CategoriesForm } from './categories-form';

export function CategoriesEdit() {
  return (
    <>
      <HeaderPage title="Editar Categoria" />
      <CategoriesForm action="edit" />
    </>
  );
}

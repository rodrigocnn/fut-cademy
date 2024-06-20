import { HeaderPage } from '../../components/header-page';
import { CategoriesForm } from './categories-form';

export function CategoriesCreate() {
  return (
    <>
      <HeaderPage title="Cadastrar Categoria" />
      <CategoriesForm />
    </>
  );
}

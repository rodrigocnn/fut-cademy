import { HeaderPage } from '../../components/header-page';
import { StudentsForm } from './students-form';

export function StudentsCreate() {
  return (
    <>
      <HeaderPage title="Cadastrar Aluno" />
      <StudentsForm />
    </>
  );
}

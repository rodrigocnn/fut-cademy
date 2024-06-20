import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { Button } from '../../components/button';
import { ColumnForm } from '../../components/column-form';
import { ButtonCancel } from '../../components/button-cancel';
import { useFormCategory } from '../../modules/categories/hooks/useFormCategory';
import { ContainerForm } from '../../components/container-form';

interface PatientFormProps {
  action?: 'create' | 'edit';
}

export function CategoriesForm({ action = 'create' }: PatientFormProps) {
  const { register, handleSubmit } = useForm();
  const { onSubmit, categorySelected } = useFormCategory(action);

  return (
    <ContainerForm>
      <div className="mb-4 mt-4 p-1   font-bold text-slate-50">Geral</div>
      <form data-testid="form-category" onSubmit={handleSubmit(onSubmit)}>
        <ColumnForm>
          <Input
            defaultValue={categorySelected?.name}
            autoComplete="off"
            {...register('name')}
            type="text"
            aria-label="Nome"
            placeholder="Nome"
          />
        </ColumnForm>

        <div className="mt-6">
          <Button type="submit">Salvar</Button>
          <ButtonCancel to="/categories" />
        </div>
      </form>
    </ContainerForm>
  );
}

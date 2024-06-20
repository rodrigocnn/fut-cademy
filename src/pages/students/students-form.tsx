import Masks from '../../shared/utils/Masks';
import MaskedInput from 'react-text-mask';
import { useForm } from 'react-hook-form';

import { StatesBR } from '../../shared/constants';
import { Input } from '../../components/Input';
import { Select } from '../../components/select';
import { Button } from '../../components/button';
import { ColumnForm } from '../../components/column-form';
import { ButtonCancel } from '../../components/button-cancel';
import { useFormStudent } from '../../modules/students/hooks/useFormStudent';

interface PatientFormProps {
  action?: 'create' | 'edit';
}

export function StudentsForm({ action = 'create' }: PatientFormProps) {
  const { register, handleSubmit } = useForm();
  const { onSubmit } = useFormStudent(action);

  return (
    <>
      <div className="relative  h-full overflow-x-auto   ">
        <div className="rounded px-5 border border-primary">
          <div className="mb-4 mt-4 p-1   font-bold text-slate-50">Geral</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ColumnForm>
              <Input {...register('name')} autoComplete="off" type="text" placeholder="Nome" />
            </ColumnForm>

            <ColumnForm>
              <Input {...register('email')} autoComplete="off" type="text" placeholder="Email" />
              <MaskedInput
                autoComplete="off"
                {...register('phone')}
                mask={Masks.celular}
                type="text"
                placeholder="Telefone"
                className="input-default"
              />
            </ColumnForm>

            <ColumnForm>
              <Input
                {...register('birth')}
                autoComplete="off"
                type="text"
                placeholder="Data de Nascimento"
              />

              <MaskedInput
                {...register('cpf')}
                mask={Masks.cpf}
                type="text"
                placeholder="CPF"
                className="input-default"
                autoComplete="off"
              />

              <Input {...register('rg')} autoComplete="off" type="text" placeholder="RG" />
            </ColumnForm>

            <div className="mb-4 mt-4 p-1 font-bold text-slate-50 ">Endereço</div>

            <ColumnForm>
              <Input
                {...register('address')}
                autoComplete="off"
                type="text"
                placeholder="Endereço"
              />
            </ColumnForm>

            <ColumnForm>
              <Input
                {...register('district')}
                autoComplete="off"
                type="text"
                placeholder="Bairro"
              />
              <Input {...register('city')} autoComplete="off" type="text" placeholder="Cidade" />
              <Select
                {...register('state')}
                onChange={function noRefCheck() {}}
                options={StatesBR}
              />
            </ColumnForm>

            <div className="mt-6">
              <Button type="submit">Salvar</Button>
              <ButtonCancel to="/students" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

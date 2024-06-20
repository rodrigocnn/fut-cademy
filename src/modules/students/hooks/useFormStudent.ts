import { toast } from 'react-toastify';

import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { CategoriesService } from '../../categories/services';

export function useFormStudent(action: 'create' | 'edit') {
  const navigate = useNavigate();
  const mutationCreate = useMutation(createData);

  async function createData(data: FieldValues) {
    try {
      const response = await CategoriesService.create(data.name);
      if (response.data) {
        toast('Registro Inserido com Sucesso', { type: 'success' });
        return navigate('/students');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao tentar enviar o formulário:', error);
      toast('Ocorreu um erro ao tentar enviar o formulário', { type: 'error' });
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    if (action === 'create') {
      mutationCreate.mutate(data);
    }
  };

  return { onSubmit };
}

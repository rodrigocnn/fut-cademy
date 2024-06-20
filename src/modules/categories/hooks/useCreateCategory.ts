import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';

import { CategoriesService } from '../services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';

export function useCreateCategory() {
  const navigate = useNavigate();

  const mutationCreate = useMutation<AxiosResponse, AxiosError, FieldValues>(
    async (data: FieldValues) => {
      const response = await CategoriesService.create(data.name);
      return response.data;
    },
    {
      onSuccess: data => {
        if (data) {
          toast('Registro Inserido com Sucesso', { type: 'success' });
          navigate('/categories');
        }
      },
      onError: () => {
        toast('Não foi possível criar a categoria', { type: 'error' });
      },
    },
  );

  return {
    mutationCreate,
  };
}

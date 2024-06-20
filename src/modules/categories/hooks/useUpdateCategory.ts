import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';

import { Category } from '../models';
import { CategoriesService } from '../services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function useUpdateCategory() {
  const navigate = useNavigate();

  const mutationUpdate = useMutation<AxiosResponse, AxiosError, Category>(
    async (payload: Category) => {
      const response = await CategoriesService.update(payload as Category);
      return response.data;
    },
    {
      onSuccess: data => {
        if (data) {
          toast('Registro Inserido com Sucesso', { type: 'success' });
          return navigate('/categories');
        }
      },
      onError: () => {
        toast('Não foi possível excluir a categoria', { type: 'error' });
      },
    },
  );

  return {
    mutationUpdate,
  };
}

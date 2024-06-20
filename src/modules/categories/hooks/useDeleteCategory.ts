import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { CategoriesService } from '../services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { openModalDelete } from '../slice';

export function useDeleteCategory() {
  const dispatch = useDispatch();
  const idSelected = useSelector((state: RootState) => state.category.idSelected);
  const queryClient = useQueryClient();

  const mutationDelete = useMutation<number, AxiosError>(
    () => {
      return CategoriesService.delete(idSelected as number);
    },
    {
      onSuccess: status => {
        if (status === 200) {
          toast('Registro Excluído com Sucesso', { type: 'success' });
          queryClient.refetchQueries(['get-categories']);
          dispatch(openModalDelete());
        }
      },
      onError: () => {
        toast('Não foi possível excluir a categoria', { type: 'error' });
      },
    },
  );

  return {
    mutationDelete,
  };
}

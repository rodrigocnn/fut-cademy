import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';

import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { openModalDelete, setIdSelected } from '../slice';
import { Student } from '../models';
import { useState } from 'react';
import { StudentsService } from '../services';

export function useDataGridCategory() {
  const dispatch = useDispatch();
  const isOpenModalDelete = useSelector((state: RootState) => state.category.isOpenModalDelete);
  const idSelected = useSelector((state: RootState) => state.category.idSelected);
  const [dataSource, setDataSource] = useState<Student[]>([]);

  const mutationDelete = useMutation<number, AxiosError>(
    () => StudentsService.delete(idSelected as number),
    {
      onSuccess: status => {
        if (status === 200) {
          toast('Registro Excluído com Sucesso', { type: 'success' });
          query.refetch();
          dispatch(openModalDelete());
        }
      },
      onError: () => {
        toast('Não foi possível excluir o aluno', { type: 'error' });
      },
    },
  );

  const query = useQuery<Student[], AxiosError>({
    queryKey: ['get-students'],
    queryFn: () => StudentsService.index(),
    onSuccess: data => {
      setDataSource(data || []);
    },
  });

  const openDeleteConfirm = (id: number) => {
    dispatch(openModalDelete());
    dispatch(setIdSelected(id));
  };

  return {
    mutationDelete,
    query,
    dataSource,
    isOpenModalDelete,
    openDeleteConfirm,
  };
}

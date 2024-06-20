import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Category } from '../models';
import { RootState } from '../../../store';
import { openModalDelete, setCategorySelected, setIdSelected } from '../slice';

export function useDataGridCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gridStyle = { minHeight: 500 };
  const isOpenModalDelete = useSelector((state: RootState) => state.category.isOpenModalDelete);

  const openDeleteConfirm = (id: number) => {
    dispatch(openModalDelete());
    dispatch(setIdSelected(id));
  };

  const editRegister = (data: Category) => {
    dispatch(setCategorySelected(data));
    return navigate(`/categories/edit/${data.id}`);
  };

  return {
    isOpenModalDelete,
    gridStyle,
    openDeleteConfirm,
    editRegister,
  };
}

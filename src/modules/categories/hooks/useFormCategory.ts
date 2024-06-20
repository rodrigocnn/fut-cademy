import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { Category } from '../models';
import { RootState } from '../../../store';
import { useCreateCategory } from './useCreateCategory';
import { useUpdateCategory } from './useUpdateCategory';

export function useFormCategory(action: 'create' | 'edit') {
  const categorySelected = useSelector((state: RootState) => state.category.categorySelected);
  const { mutationCreate } = useCreateCategory();
  const { mutationUpdate } = useUpdateCategory();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    if (action === 'create') {
      mutationCreate.mutate(data);
    } else {
      const payload = {
        id: categorySelected?.id,
        name: data.name,
      };
      mutationUpdate.mutate(payload as Category);
    }
  };

  return { onSubmit, categorySelected };
}

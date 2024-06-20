import { CategoriesService } from '../../../services/categories';

export async function deleteCategory(id: number) {
  const response = await CategoriesService.delete(id);
  return response.data;
}

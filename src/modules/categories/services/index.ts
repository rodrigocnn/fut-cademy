import { AxiosResponse } from 'axios';
import { Category } from '../models';
import { api } from '../../../services/api';

export const CategoriesService = {
  index: async (): Promise<Category[]> => {
    const response = await api.get<Category[]>('/categories');
    return response.data;
  },

  create: async (name: string): Promise<AxiosResponse> => {
    const response = await api.post<AxiosResponse>('/categories', { name });
    return response;
  },

  update: async (category: Category): Promise<AxiosResponse> => {
    const { id, name } = category;
    const response = await api.put<AxiosResponse>(`categories/${id}`, { name });
    return response;
  },

  delete: async (id: number): Promise<number> => {
    const response = await api.delete<AxiosResponse>(`categories/${id}`);
    return response.status;
  },
};

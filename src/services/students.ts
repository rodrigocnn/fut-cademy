import { AxiosResponse } from 'axios';
import { Category } from '../modules/categories/models';
import { api } from './api';

export const StudentsService = {
  index: () => {
    return api.get<Category[]>(`/categories`).then(response => response.data);
  },
  create: (name: string) => {
    return api.post<AxiosResponse>('/students', { name });
  },

  upadate: ({ id, name }: Category) => {
    return api.put<void>(`categories/${id}`, { name });
  },

  delete: (id: number) => {
    return api.delete<void>(`categories/${id}`);
  },
};

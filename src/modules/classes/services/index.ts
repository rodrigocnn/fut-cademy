import { AxiosResponse } from 'axios';
import { Class } from '../models';
import { api } from '../../../services/api';

export const ClassesService = {
  index: async (): Promise<Class[]> => {
    const response = await api.get<Class[]>('/classes');
    return response.data;
  },

  create: async (name: string): Promise<AxiosResponse> => {
    const response = await api.post<AxiosResponse>('/classes', { name });
    return response;
  },

  update: async (item: Class): Promise<AxiosResponse> => {
    const { id, name } = item;
    const response = await api.put<AxiosResponse>(`classes/${id}`, { name });
    return response;
  },

  delete: async (id: number): Promise<number> => {
    const response = await api.delete<AxiosResponse>(`classes/${id}`);
    return response.status;
  },
};

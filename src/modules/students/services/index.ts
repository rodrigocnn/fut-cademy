import { AxiosResponse } from 'axios';

import { api } from '../../../services/api';
import { Student } from '../models';

export const StudentsService = {
  index: async (): Promise<Student[]> => {
    const response = await api.get<Student[]>('/students');
    return response.data;
  },

  create: async (name: string): Promise<AxiosResponse> => {
    const response = await api.post<AxiosResponse>('/students', { name });
    return response;
  },

  update: async (student: Student): Promise<AxiosResponse> => {
    const { id, name } = student;
    const response = await api.put<AxiosResponse>(`students/${id}`, { name });
    return response;
  },

  delete: async (id: number): Promise<number> => {
    const response = await api.delete<AxiosResponse>(`students/${id}`);
    return response.status;
  },
};

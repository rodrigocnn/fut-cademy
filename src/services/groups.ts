import { Group } from '../modules/groups/models';
import { api } from './api';

export const GroupsService = {
  index: () => {
    return api.get<Group[]>(`/groups`).then(response => response.data);
  },
  create: (name: string) => {
    return api.post<void>('/groups', { name });
  },

  upadate: ({ id, name }: Group) => {
    return api.put<void>(`groups/${id}`, { name });
  },
};

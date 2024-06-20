import { useState } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { Category } from '../models';
import { CategoriesService } from '../services';

export function useGetCategories() {
  const [dataSource, setDataSource] = useState<Category[]>([]);

  const query = useQuery<Category[], AxiosError>({
    queryKey: ['get-categories'],
    queryFn: () => CategoriesService.index(),
    onSuccess: data => {
      setDataSource(data || []);
    },
  });

  return {
    dataSource,
    query,
  };
}

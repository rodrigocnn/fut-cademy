import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { Class } from '../models';
import { ClassesService } from '../services';
import { useState } from 'react';

export function useDataGridClasses() {
  const gridStyle = { minHeight: 370 };
  const [dataSource, setDataSource] = useState<Class[]>([]);

  const query = useQuery<Class[], AxiosError>({
    queryKey: ['get-classes'],
    queryFn: () => ClassesService.index(),
    onSuccess: data => {
      setDataSource(data || []);
    },
  });

  return {
    query,
    dataSource,
    gridStyle,
  };
}

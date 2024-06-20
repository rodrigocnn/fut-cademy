import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { vi } from 'vitest';

import { useGetCategories } from './useGetCategories';

const queryClient = new QueryClient();
const mockedUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('Custom Hook useGetCategories', () => {
  it('should return a list of all categories', async () => {
    const { result } = renderHook(() => useGetCategories(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      ),
    });
    await waitFor(() => result.current.query.isSuccess, { timeout: 3000 });

    expect(result.current.dataSource).toEqual([
      { id: 1, name: 'sub-7' },
      { id: 2, name: 'sub-9' },
      { id: 3, name: 'sub-11' },
    ]);
  });
});

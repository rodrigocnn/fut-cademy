import { act, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { vi } from 'vitest';

import { useUpdateCategory } from './useUpdateCategory';

const queryClient = new QueryClient();
const mockedUseNavigate = vi.fn();
const mockedToast = vi.fn();

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

vi.mock('react-toastify', async () => {
  const mod = await vi.importActual<typeof import('react-toastify')>('react-toastify');
  return {
    ...mod,
    toast: () => mockedToast,
  };
});

describe('Custom Hook useUpdateCategory', () => {
  it('should update a category correctly', async () => {
    const { result } = renderHook(() => useUpdateCategory(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      ),
    });

    const { mutationUpdate } = result.current;
    const categoryPayload = {
      id: 8,
      name: 'Professional',
    };

    await act(async () => {
      await mutationUpdate.mutateAsync(categoryPayload);
    });

    expect(result.current.mutationUpdate.isSuccess).toBe(true);
  });
});

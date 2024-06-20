import { act, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { vi } from 'vitest';

import { useCreateCategory } from './useCreateCategory';

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

describe('Custom Hook useCreateCategory', () => {
  it('should create a category correctly', async () => {
    const { result } = renderHook(() => useCreateCategory(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      ),
    });

    const { mutationCreate } = result.current;
    const categoryPayload = {
      name: 'Professional',
    };

    await act(async () => {
      await mutationCreate.mutateAsync(categoryPayload);
    });

    expect(result.current.mutationCreate.isSuccess).toBe(true);
  });
});

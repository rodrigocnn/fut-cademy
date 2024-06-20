import { QueryClient } from 'react-query';
import { vi } from 'vitest';

const queryClient = new QueryClient();
const mockedUseNavigate = vi.fn();
const mockedUseDispatch = vi.fn();
const mockedUseSelector = vi.fn();
const mockedUseMutation = vi.fn();

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

vi.mock('react-redux', async () => {
  const mod = await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...mod,
    useDispatch: () => mockedUseDispatch,
    useSelector: () => mockedUseSelector,
    useMutation: () => mockedUseMutation,
  };
});

// Exportando os mocks para uso nos testes
export { mockedUseNavigate, mockedUseDispatch, mockedUseSelector, mockedUseMutation, queryClient };

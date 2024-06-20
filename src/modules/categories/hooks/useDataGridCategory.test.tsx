import { RenderHookResult, act, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { vi } from 'vitest';

import { openModalDelete, setCategorySelected, setIdSelected } from '../slice';
import { useDataGridCategory } from './useDataGridCategory';
import { Category } from '../models';

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

describe('Custom Hook useDataGridCategory', () => {
  interface IResultHook {
    openDeleteConfirm: (id: number) => void;
    editRegister: (data: Category) => void;
  }

  let renderHookResult: RenderHookResult<IResultHook, ReturnType<typeof useDataGridCategory>>;

  beforeEach(() => {
    renderHookResult = renderHook(() => useDataGridCategory(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      ),
    });
  });

  it('should open delete confirmation modal and set selected ID', () => {
    const { openDeleteConfirm } = renderHookResult.result.current;
    act(() => {
      openDeleteConfirm(3);
    });
    expect(mockedUseDispatch).toHaveBeenCalledWith(openModalDelete());
    expect(mockedUseDispatch).toHaveBeenCalledWith(setIdSelected(3));
  });

  it('should to select the categoy after clicked no datagrid and redirect', () => {
    const { editRegister } = renderHookResult.result.current;
    const category = {
      id: 1,
      name: 'Profissional',
    };
    act(() => {
      editRegister(category);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith(setCategorySelected(category));
    expect(mockedUseNavigate).toHaveBeenCalledWith(`/categories/edit/${category.id}`);
  });
});

import { render, screen } from '@testing-library/react';

import { Categories } from '.';

import { vi } from 'vitest';
import { CategoryProvider } from '../../modules/categories/context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
const mockedUseDispatch = vi.fn();
const mockedUseSelector = vi.fn();
const mockedUseMutation = vi.fn();

vi.mock('react-redux', async () => {
  const mod = await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...mod,
    useDispatch: () => mockedUseDispatch,
    useSelector: () => mockedUseSelector,
    useMutation: () => mockedUseMutation,
  };
});

describe('Categories Home', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <CategoryProvider>
          <BrowserRouter>
            <Categories />
          </BrowserRouter>
        </CategoryProvider>
        ,
      </QueryClientProvider>,
    );
  });

  it('Should to render a title called Categorias ', () => {
    const title = screen.getByText(/categorias/i);
    expect(title).toBeInTheDocument();
  });

  it('Should to render a datagrid with 4 colums  ', async () => {
    const column1 = screen.getByText(/código categoria/i);
    const column2 = screen.getByText(/nome da categoria/i);
    const column3 = screen.getByText(/editar/i);
    const column4 = screen.getByText('Excluir');
    expect(column1).toBeInTheDocument();
    expect(column2).toBeInTheDocument();
    expect(column3).toBeInTheDocument();
    expect(column4).toBeInTheDocument();
  });
});

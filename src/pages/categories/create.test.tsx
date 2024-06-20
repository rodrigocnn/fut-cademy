import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CategoryProvider } from '../../modules/categories/context';
import { HeaderPage } from '../../components/header-page';
import { CategoriesForm } from './categories-form';
import { QueryClient, QueryClientProvider } from 'react-query';
import { vi } from 'vitest';

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

describe('Page Create Category', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <CategoryProvider>
          <BrowserRouter>
            <HeaderPage title="Cadastrar Categoria" />
            <CategoriesForm />
          </BrowserRouter>
        </CategoryProvider>
        ,
      </QueryClientProvider>,
    );
  });

  it('should correctly render the page header ', () => {
    const title = screen.getByText(/cadastrar categoria/i);
    expect(title).toBeInTheDocument();
  });

  it('Should correctly render a CategoriesForm  ', () => {
    const inputElement = screen.getByRole('textbox', { name: /nome/i });
    const inputSubmit = screen.getByRole('button', { name: /salvar/i });
    const buttonCancel = screen.getByRole('button', { name: /cancelar/i });
    expect(inputElement).toBeInTheDocument();
    expect(inputSubmit).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
  });
});

import { render, screen, fireEvent, renderHook, RenderHookResult } from '@testing-library/react';
import { CategoriesForm } from './categories-form';
import { useForm } from 'react-hook-form';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

let result: RenderHookResult<ReturnType<typeof useForm>, void>['result'];

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

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

describe('Categories Form', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <CategoriesForm />
        </BrowserRouter>
        ,
      </QueryClientProvider>,
    );

    const hookResult = renderHook(() => useForm(), {
      wrapper: MemoryRouter,
    });

    result = hookResult.result;
  });

  it('Should to render a input called name with placeholder Nome ', () => {
    const inputElement = screen.getByRole('textbox', { name: /nome/i });
    const nameAttribute = inputElement.getAttribute('name');
    const placeHolderAttribute = inputElement.getAttribute('placeholder');
    expect(inputElement).toBeInTheDocument();
    expect(nameAttribute).toBe('name');
    expect(placeHolderAttribute).toBe('Nome');
  });

  it('Should render a "Salvar" button ', () => {
    const inputSubmit = screen.getByRole('button', { name: /salvar/i });
    expect(inputSubmit).toBeInTheDocument();
  });

  it('Should render a "Cancelar" button ', () => {
    const inputSubmit = screen.getByRole('button', { name: /salvar/i });
    expect(inputSubmit).toBeInTheDocument();
  });

  it('Should submit a form when the "Salvar" button is clicked.', async () => {
    const onSubmit = vi.spyOn(result.current, 'handleSubmit');
    const inputSubmit = screen.getByRole('button', { name: /salvar/i });
    await fireEvent.submit(inputSubmit);
    expect(onSubmit).toHaveBeenCalled;
  });

  it('calls navigate when the "Cancelar" button is clicked', async () => {
    const button = screen.getByRole('button', { name: /cancelar/i });
    fireEvent.click(button);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/categories');
  });
});

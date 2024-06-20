import { ReactNode, createContext, useMemo, useState } from 'react';
import { Category } from '../models';

interface ICategoryContext {
  registerSelected: Category | null;
  setRegisterSelected: (value: Category | null) => void;
}

export const CategoryContext = createContext<ICategoryContext>({
  registerSelected: null,
  setRegisterSelected: () => {},
});

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [registerSelected, setRegisterSelected] = useState<Category | null>(null);

  const contextValue = useMemo(
    () => ({
      registerSelected,
      setRegisterSelected,
    }),
    [registerSelected, setRegisterSelected],
  );

  return <CategoryContext.Provider value={contextValue}>{children}</CategoryContext.Provider>;
};

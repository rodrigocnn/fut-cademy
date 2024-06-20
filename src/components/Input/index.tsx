import React, { forwardRef, useEffect } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...rest }, ref) => {
  const typeFocus = error ? 'focus:border-red-500' : 'focus:border-blue-500';

  useEffect(() => {
    if (error && ref) {
      if (typeof ref === 'function') {
        ref(null); // Chamada da função de ref para resetar o foco
      } else if (ref.current) {
        ref.current.focus(); // Acesso seguro a .current se ref for um objeto de ref mutável
      }
    }
  }, [error, ref]);

  return <input ref={ref} {...rest} className={`input-default ${typeFocus}`} />;
});

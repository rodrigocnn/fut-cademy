import { SelectHTMLAttributes } from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[] | undefined;
}

export function Select({ options, value, onChange, ...rest }: SelectProps) {
  return (
    <select {...rest} value={value} onChange={onChange} className="input-default">
      {options?.map((x, y) => (
        <option value={x.value} key={y}>
          {x.label}
        </option>
      ))}
    </select>
  );
}

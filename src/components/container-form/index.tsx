import { ReactNode } from 'react';

interface ContainerPageProps {
  children: ReactNode;
}

export function ContainerForm({ children }: ContainerPageProps) {
  return (
    <div className="relative   h-full overflow-x-auto   ">
      <div className="rounded px-5 border border-primary">{children}</div>
    </div>
  );
}

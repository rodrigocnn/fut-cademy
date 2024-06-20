interface IColumFormProp {
  children: React.ReactNode;
  top?: number;
}

export const ColumnForm = (props: IColumFormProp) => {
  const marginTop = props.top ? props.top : '2';
  return <div className={`mb-2 mt-${marginTop} flex space-x-2`}>{props.children}</div>;
};

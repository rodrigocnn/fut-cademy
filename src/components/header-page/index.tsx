interface IHeaderPageProps {
  title: string;
}

export const HeaderPage = (props: IHeaderPageProps) => {
  return (
    <div className="h-18 bg-primary h-10 w-full mb-6 text-slate-50 pl-5 pt-2   border-b border-sky-950">
      {props.title}
    </div>
  );
};

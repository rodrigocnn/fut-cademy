interface IBoxResumeProps {
  icon?: React.ReactNode;
  label?: string;
  count?: number;
}

export const BoxResume = (props: IBoxResumeProps) => {
  const { label, icon, count } = props;
  return (
    <div className="flex items-center p-4 border border-white w-80 mr-4">
      <div className="text-white text-4xl mr-4 ">{icon}</div>
      <div className="flex flex-col">
        <h2 className="text-white font-bold ">+ {count}</h2>
        <span className="text-white ">{label}</span>
      </div>
    </div>
  );
};

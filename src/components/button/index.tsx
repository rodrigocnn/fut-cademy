export function Button({ ...rest }) {
  return (
    <button
      {...rest}
      className="mb-6 mr-2 border border-slate-500 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium
      text-white  focus:outline-none focus:ring-4 focus:ring-blue-300
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-gray-100 hover:text-primary "
    />
  );
}

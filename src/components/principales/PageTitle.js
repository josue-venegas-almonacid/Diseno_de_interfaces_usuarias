export const PageTitle = ({ children }) => {
  return (
    <div className="flex items-center h-20 bg-gradient-to-r from-usm-blue to-green-300 text-usm-white">
      <h1 className="font-bold text-3xl px-8">{children}</h1>
    </div>
  );
};

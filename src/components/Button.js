export const Button = ({ children, ...props }) => {
  return (
    <a className="px-4 py-4 rounded text-center bg-usm-blue text-usm-white" href={props.href}>
      {children}
    </a>
  );
};



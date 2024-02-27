//import FadeIn from 'react-fade-in';

export const PageContent = ({ children, useGrid }) => {
  return (
    
      <div className={`px-8 py-8 text-gray-700 ${ useGrid === true ? "grid grid-cols-2" : "" }`}>
        {children}
      </div>
    
  );
};

import React from "react";

const Input = React.forwardRef(({type, name, ...props}, ref) => {
  return <input ref={ref} type={type} name={name} {...props} />;
});

// const Input = ({type, ...props}) => {
//   return <input type={type} {...props} />;
// };

export default Input;

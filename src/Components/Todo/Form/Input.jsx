import React from "react";

const Input = ({...rest}) => {
  return (
    <input
      {...rest}
      placeholder="Add a new task"
      className="w-9/12 h-3/4 p-5 text-2xl text-blue-600 outline-none bg-gray-400/40 placeholder:text-blue-400 rounded-md"
    />
  );
};

export default Input;

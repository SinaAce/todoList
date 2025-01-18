import React from "react";

const Input = ({ ...rest }) => {
  return (
    <input
      {...rest}
      placeholder="Add a new task"
      className="w-9/12 h-3/4 p-5 text-xl text-[#F5F5F5] outline-none bg-[#B22222] shadow-xl placeholder:text-[#F5F5F5] rounded-md"
    />
  );
};

export default Input;

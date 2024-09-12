import React from "react";

const Button = ({ className, text }) => {
  return (
    <>
      <button
        className={`${className} focus:outline-none text-[#FFFFFF] bg-[#053157] px-6 py-2 text-sm`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

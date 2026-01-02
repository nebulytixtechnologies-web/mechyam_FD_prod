import React from "react";

const Button = ({ text, bgColor = "bg-blue-600" }) => {
  return (
    <button
      className={`${bgColor} text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition`}
    >
      {text}
    </button>
  );
};

export default Button;

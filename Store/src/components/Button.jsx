import React from "react";

const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-4 py-2 font-bold ${
        color === "blue"
          ? "bg-blue-600 text-white"
          : "bg-red-600 text-white"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
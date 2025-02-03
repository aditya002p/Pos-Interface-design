/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ children, className = "", padding = true, shadow = true }) => {
  return (
    <div
      className={`
        bg-white 
        rounded-lg 
        ${padding ? "p-4" : ""} 
        ${shadow ? "shadow-md" : ""} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;

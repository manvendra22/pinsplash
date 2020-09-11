import React from "react";

function Icon({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="10" cy="10" r="7"></circle>
      <path d="M21 21L15 15"></path>
    </svg>
  );
}

export default Icon;

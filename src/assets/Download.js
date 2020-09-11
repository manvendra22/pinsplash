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
      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"></path>
      <path d="M7 11L12 16 17 11"></path>
      <path d="M12 4L12 16"></path>
    </svg>
  );
}

export default Icon;

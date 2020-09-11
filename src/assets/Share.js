import React from "react";

function Icon({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={color}
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="18" cy="18" r="3"></circle>
      <path d="M8.7 10.7L15.3 7.3"></path>
      <path d="M8.7 13.3L15.3 16.7"></path>
    </svg>
  );
}

export default Icon;
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
      <circle cx="12" cy="11" r="3"></circle>
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    </svg>
  );
}

export default Icon;

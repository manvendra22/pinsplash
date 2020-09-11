import React from "react";

function Icon({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M2 12l1.5 2a11 11 0 0017 0l1.5-2M2 12l1.5-2a11 11 0 0117 0l1.5 2"></path>
    </svg>
  );
}

export default Icon;
import React from "react";

export default function CirclePercentage({ value }) {
    const percentage = (value * 500)/100;
  return (
    <div className="w-[160px] h-[160px] relative flex items-center justify-center">
      <div className="text-5xl font-bold text-gray-900 dark:text-gray-100">{value}%</div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="absolute top-0 left-0">
        <circle stroke="#6A6A9F" className="fill-none stroke-[6px]" cx="80" cy="80" r="70" stroke-linecap="round" />
        <circle
          strokeDasharray={470}
          strokeDashoffset={percentage}
          className="fill-none stroke-[url(#purpleGradient)] stroke-[15px]"
          cx="80" cy="80" r="70"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient id="purpleGradient" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E323FF" />
            <stop offset="1" stop-color="#7517F8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

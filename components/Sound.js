import React from "react";

export default function Sound({ emoji, src }) {
  const play = src => {
    const audio = new Audio(`/${src}.mp3`);
    audio.play();
  };
  return (
    <li className="col-span-1 flex rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-1 ease-in-out duration-300">
      <button
        type="button"
        className="flex-1 items-center px-6 py-3 bg-gray-100 border-4 border-gray-600 text-4xl rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 hover:border-blue-700 hover:bg-blue-600 focus:outline-none focus:shadow-outline focus:border-blue-700 focus:bg-blue-700 active:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150"
        onClick={play(src)}
      >
        {emoji}
      </button>
    </li>
  );
}

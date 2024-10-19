import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [info, setInfo ] = useState(false);

  const handleInfoButtonClick = ()=>{
    setInfo(!info);
  }

  return (
    <div className="pt-[5%] md:pt-[14%] px-4 md:px-12 absolute w-full aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-xl w-full md:w-1/2 md:text-3xl font-semibold">{title}</h1>
      {info && <div>
      <p className="w-full h-24 md:h-44 overflow-scroll md:w-1/2 py-2 md:py-6 text-md md:text-lg">{overview}</p>
      </div>}
      
      <div className="flex flex-col md:flex-row my-1 md:my-6">
        <button className="bg-white bg-opacity-50 md:bg-opacity-100 text-white md:text-black hover:opacity-70 w-1/4 md:w-1/6 mt-2 md:mt-0 hover:scale-105 px-0 md:px-8 py-1 md:py-3 text-md md:text-xl rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 mt-[-2px] mr-1 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Play
        </button>
        <button onClick={handleInfoButtonClick} className="bg-gray-500 bg-opacity-50 text-white w-1/4 md:w-1/6 mt-2 md:mt-0 hover:scale-105 px-1 md:px-8 py-1 md:py-3 text-md md:text-xl rounded-lg mx-0 md:mx-2">
          {!info? <> <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 inline mt-[-2px] mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <span className="hidden md:inline-block">More </span><span> Info</span> </> :<span>Show less</span> } 
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

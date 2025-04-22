import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playButtonClick } from "../Utils/moviesSlice";
import { useNavigate } from "react-router-dom";

import { toggleMuteValue } from "../Utils/configSlice";

const VideoTitle = ({ title, overview , vote_average , vote_count ,release_date }) => {
  const isMuted = useSelector((store) => store.config.isMuted);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // const [mute, setMute] = useState(true);
  const [info, setInfo] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const playButton = useSelector(store=>store.movies.playButtonClicked)
  const handleInfoButtonClick = () => {
    setInfo(!info);
  };

  const handlePlayButtonClick = () => {
    // console.log(playButton);

    dispatch(playButtonClick());
    // window.location.href("https://www.youtube.com/watch/"+{})
    navigate("/playVideo");
  };

  const toggleMute = () => {
    dispatch(toggleMuteValue());
  };

  // useEffect(()=>{
  //   handlePlayButtonClick();
  // }, [playButton]);

  return (
    <div className="pt-[5%] md:pt-[14%] px-4 md:px-12 absolute w-full aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-xl w-full md:w-1/2 md:text-3xl font-semibold">
        {title}
      </h1>
      {info && (
        <div className="w-full max-h-[90px] md:max-h-44 overflow-scroll no-scrollbar md:w-1/2 py-2 md:py-6 text-md md:text-lg">
          <p className="">
            {overview}

          </p>
          <br/>
             { vote_average && vote_count && release_date &&<><p>Rating: {vote_average}/10  ({vote_count} votes) </p>
            <br/>
            <p>Released On: {release_date}</p>
            </>}
        </div>
      )}

      <div className="flex flex-col md:flex-row my-1 md:my-6">
        <button
          onClick={handlePlayButtonClick}
          className="bg-white bg-opacity-50 md:bg-opacity-100 text-white md:text-black hover:opacity-70 w-1/4 md:w-1/5 lg:w-1/6 mt-2 md:mt-0 hover:scale-105 px-0 md:px-2 xl:px-4 py-1 md:py-3 text-sm md:text-xl rounded-lg"
        >
          <svg
            xmlns="https://www.w3.org/2000/svg"
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
        <button
          onClick={handleInfoButtonClick}
          className="bg-gray-500 bg-opacity-50 text-white w-1/4 md:w-1/6 mt-2 md:mt-0 hover:scale-105 px-1 md:px-2 xl:px-4 py-1 md:py-3 text-sm md:text-xl rounded-lg mx-0 md:mx-2"
        >
          {!info ? (
            <>
              {" "}
              <svg
                xmlns="https://www.w3.org/2000/svg"
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
              <span className="hidden md:inline-block">More </span>
              <span> Info</span>{" "}
            </>
          ) : (
            <span>Show less</span>
          )}
        </button>
      </div>

      {trailerVideo.length > 0 && (
        <div>
          <div
            className={
              "px-4 md:px-12 w-full  text-white pt-[0px] " +
              (info && "-mt-16 md:-mt-40")
            }
          >
            <div className="flex gap-3 mt-4 justify-end">
              <button
                className="w-9 h-9 md:w-16 md:h-16 rounded-full flex items-center justify-center border border-solid border-gray-500/50 hover:border-gray-400 bg-black/5 hover:bg-black/50"
                onClick={toggleMute}
              >
                {isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* <button>{isMuted?'Unmute':'Mute'}</button> */}
        </div>
      )}
    </div>
  );
};

export default VideoTitle;

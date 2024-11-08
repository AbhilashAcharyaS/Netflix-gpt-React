import { useSelector } from "react-redux";
import Header from "./Header";

const PlayVideoPage = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (trailerVideo.length === 0)
    return (
      <h1 className="bg-black h-screen flex items-center justify-center font-bold text-white text-xl">
        No Videos found for the movie! ☹{" "}
      </h1>
    );

  else if (trailerVideo.length === 1)
    return (
      <div className="bg-black h-screen flex items-center">
        {/* <Header/> */}
        <div className="w-full">
          <iframe
            className="w-full aspect-video z-20"
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo[0]?.key +
              "?autoplay=1&mute=0&cc_load_policy=1&rel=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );

  else {
    const mainVideo = trailerVideo[trailerVideo.length-1];
    // console.log(restVideos);

    return (
      <>
      <div className="bg-black h-[500px] sm:h-screen flex items-center">
        <div className="w-full pt-8">
          <iframe
            className="w-full aspect-video z-20"
            src={
              "https://www.youtube.com/embed/" +
              mainVideo?.key +
              "?autoplay=1&mute=0&cc_load_policy=1&rel=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <h2 className="text-white text-xl font-bold text-center my-8 sm:hidden">Scroll for more videos!</h2> */}
        </div>
      </div>
      <div className="bg-black min-h-screen flex flex-col py-20 sm:flex-row sm:flex-wrap justify-center items-center">
      {trailerVideo.map((video) => (
        <div
          key={video.key}
          className="w-5/6 sm:w-[45%] bg-black my-8 sm:m-4 sm:my-4"
        >
          <iframe
            className="w-full rounded-xl hover:scale-105 aspect-video z-20"
            src={
              "https://www.youtube.com/embed/" +
              video?.key +
              "?autoplay=0&mute=0&cc_load_policy=1&rel=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    </>
    );

  //   return (
  //     // <div className="bg-black h-screen flex items-center">
  //     //     {/* <Header/> */}
  //     //     <div className="w-full">
  //     //     <iframe className='w-full aspect-video z-20' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=0&cc_load_policy=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  //     //     </div>
  //     //     </div> )}
  //     // </div>

  //     <div className="bg-black min-h-screen flex flex-col py-20 sm:flex-row sm:flex-wrap justify-center items-center">
  //       {trailerVideo.map((video) => (
  //         <div
  //           key={video.key}
  //           className="w-5/6 sm:w-[45%] bg-black my-8 sm:m-4 sm:my-4"
  //         >
  //           <iframe
  //             className="w-full rounded-xl hover:scale-105 aspect-video z-20"
  //             src={
  //               "https://www.youtube.com/embed/" +
  //               video?.key +
  //               "?autoplay=0&mute=0&cc_load_policy=1"
  //             }
  //             title="YouTube video player"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //             referrerPolicy="strict-origin-when-cross-origin"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
};
}

export default PlayVideoPage;

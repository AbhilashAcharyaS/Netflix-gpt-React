import { useSelector } from "react-redux";
import Header from "./Header"

const PlayVideoPage = () => {
    const trailerVideo= useSelector(store=>store.movies?.trailerVideo);

  return (
    <div className="bg-black h-screen flex  items-center">
        {/* <Header/> */}
        <div className="w-full">
        <iframe className='w-full aspect-video z-20' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=0&cc_load_policy=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default PlayVideoPage
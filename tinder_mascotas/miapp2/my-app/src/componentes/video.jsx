import ReactPlayer from "react-player";
import video from "../videos/video.mp4";


function Video() {
    return (
      <div>

            <ReactPlayer
className="video"
url={video}
height="100%"
width="100%"
config={{
  file: {
    attributes: {
      autoPlay: true,
      muted: true,
    },
  },
}}
playsInline
autoPlay
muted
loop
/>

</div>

  );
}

export default Video;

import VideoPlayer from "../home/VideoPlayer";

const MainHeroVideo = () => {
  return (
    <div className="relative h-screen w-screen">
      <VideoPlayer src="/hero-video.mp4" />
      <div className="h-screen w-full absolute top-0 left-0 bg-indigo-950 opacity-50"></div>
    </div>
  );
};
export default MainHeroVideo;

import { cn } from "@/lib/utils";

const VideoPlayer = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div className="relative w-full h-full">
      <video
        className={cn("w-full h-full object-cover", className)}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default VideoPlayer;

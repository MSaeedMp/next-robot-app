import Image from "next/image";

const ImageContainer = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div className="relative lg:h-[600px] h-[420px] w-full ">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
        className={
          "object-cover h-full rounded-xl transition-opacity duration-500 ease-in"
        }
      />
    </div>
  );
};
export default ImageContainer;

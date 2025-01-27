import Image from "next/image";

const PageHeroImage = ({ image }: { image: string }) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl">
      <Image
        src={image}
        alt="solutions image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-xl"
        unoptimized
      />
    </div>
  );
};
export default PageHeroImage;

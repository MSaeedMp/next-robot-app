import Image from "next/image";

type ImageItem = {
  image: string;
  title: string;
};

const ImageGridContainer = ({ imageList }: { imageList: ImageItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 space-x-2">
      {imageList.map((imageItem, index) => {
        const { title, image } = imageItem;
        return (
          <div key={index} className="mb-8 group">
            <div className="relative max-h-[420px] aspect-square mx-auto rounded-xl overflow-hidden">
              <Image
                src={image}
                alt={title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover w-full h-full rounded-xl  transform transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <h4 className=" mt-6 text-center text-sm md:text-base">{title}</h4>{" "}
          </div>
        );
      })}
    </div>
  );
};
export default ImageGridContainer;

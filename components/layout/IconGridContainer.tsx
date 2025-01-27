import Image from "next/image";

type ImageItem = {
  image: string;
  title: string;
};

const IconGridContainer = ({ imageList }: { imageList: ImageItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 space-x-2">
      {imageList.map((imageItem, index) => {
        const { title, image } = imageItem;
        return (
          <div key={index} className="mb-4 xl:mb-0">
            <div className="border border-sky-600 bg-white rounded-xl md:p-5 flex justify-center">
              <div className="relative md:h-96 md:w-52 h-72 w-48">
                <Image
                  src={image}
                  alt={title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h4 className="mt-3 text-center md:text-base text-sm">{title}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default IconGridContainer;

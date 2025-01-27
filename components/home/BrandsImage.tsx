import { cn } from "@/lib/utils";
import Image from "next/image";

const BrandsImage = ({
  src,
  leftToRight= false,
}: {
  src: string;
  leftToRight?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative w-[180px] h-[180px]  md:w-[220px] md:h-[220px]",
        leftToRight && "transform scale-x-[-1]"
      )}
    >
      <Image
        src={src}
        alt="brand's image"
        fill
        className="object-contain"
        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
      />
    </div>
  );
};
export default BrandsImage;

"use client";

import { motion } from "framer-motion";
import BrandsImage from "./BrandsImage";
import { cn } from "@/lib/utils";

const BrandsMarquee = ({
  brandsImgList,
  leftToRight = false,
}: {
  brandsImgList: string[];
  leftToRight?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden h-40 md:h-48 w-full ",
        leftToRight && "transform scale-x-[-1]"
      )}
    >
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-start"
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        {brandsImgList.map((img, index) => (
          <BrandsImage leftToRight={leftToRight} key={index} src={img} />
        ))}
      </motion.div>

      <motion.div
        className="absolute top-0 left-full flex items-center justify-start"
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        {brandsImgList.map((img, index) => (
          <BrandsImage
            leftToRight={leftToRight}
            key={index + brandsImgList.length}
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsMarquee;

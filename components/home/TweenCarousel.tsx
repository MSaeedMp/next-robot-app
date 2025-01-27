"use client";
import { JSX, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { cn } from "@/lib/utils";

type TweenCarouselProps<T> = {
  items: T[];
  className?: string;
  duration?: number;
  renderSlide: (item: T) => JSX.Element;
};

const TweenCarousel = <T extends object>({
  items,
  className,
  duration = 4000,
  renderSlide,
}: TweenCarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const changeIndex = () => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    };
    const intervalId = setInterval(changeIndex, duration);
    return () => clearInterval(intervalId);
  }, [isPaused, duration, items.length]);

  return (
    <div>
      {/* Carousel Content */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className={cn(
          "relative flex items-center justify-center h-[480px] sm:h-[350px] w-full overflow-hidden",
          className
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            key={activeIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              x: { type: "tween", duration: 0.5 },
              opacity: { duration: 0.3 },
            }}
          >
            {renderSlide(items[activeIndex])}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-end mt-4 mr-4 gap-x-2">
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
          }
        >
          <IoArrowBack className="w-8 h-8" />
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
        >
          <IoArrowForward className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default TweenCarousel;

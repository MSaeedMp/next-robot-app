"use client";
import { manualWorks } from "@/lib/constants";
import PrimaryHeading from "../heading/PrimaryHeading";
import RobotArm from "../icon/RobotArm";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Grid2ColsLg from "../layout/Grid2ColsLg";

const ManualWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const changeIndex = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === manualWorks.length - 1 ? 0 : prevIndex + 1
      );
    };
    const intervalId = setInterval(changeIndex, 4000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <Grid2ColsLg className="py-16">
      <div className="relative h-[500px] lg:h-auto w-full mb-8 lg:mb-0">
        {manualWorks.map((work, index) => (
          <Image
            key={index}
            src={work.img}
            alt={work.title}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            className={cn(
              "object-cover h-full rounded-xl transition-opacity duration-500 ease-in",
              activeIndex === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
      <div>
        <PrimaryHeading className="text-foreground">
          Automate your tasks with our robot arms.
        </PrimaryHeading>
        <ul className="max-w-[600px] flex flex-wrap gap-x-3 gap-y-5 my-10 lg:my-16">
          {manualWorks.map((work, index) => (
            <li
              className={cn(
                " font-light cursor-pointer text-white px-7 py-2 rounded-full flex items-center gap-4",
                activeIndex === index
                  ? "bg-cyan-700 shadow-lg scale-105"
                  : "bg-gray-700 hover:bg-gray-600"
              )}
              key={index}
              onMouseEnter={() => {
                setActiveIndex(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <RobotArm /> <span>{work.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </Grid2ColsLg>
  );
};

export default ManualWorks;

"use client";
import Grid2ColsLg from "../layout/Grid2ColsLg";
import { easySolutions } from "@/lib/constants";
import TweenCarousel from "./TweenCarousel";
import PrimaryHeading from "../heading/PrimaryHeading";
import PrimaryButton from "../button/PrimaryButton";
import Link from "next/link";

const EasySolutions = () => {
  return (
    <Grid2ColsLg className="pt-16">
      <div>
        <PrimaryHeading className="text-foreground mb-12">
          We provide you with easy solutoins
        </PrimaryHeading>
        <Link href="/contact">
          <PrimaryButton className="text-foreground border-blue-500 hover:border-stone-500 mb-10" />
        </Link>
      </div>
      <TweenCarousel
        items={easySolutions}
        duration={5000}
        className="shadow-lg rounded-xl bg-gradient-to-tr from-cyan-100 to-blue-200"
        renderSlide={(solution: { title: string; description: string }) => (
          <div className="p-8 font-ebGaramond">
            <h2 className="text-4xl font-light  mb-10">{solution.title}</h2>
            <p className="text-xl mt-2">{solution.description}</p>
          </div>
        )}
      />
    </Grid2ColsLg>
  );
};
export default EasySolutions;

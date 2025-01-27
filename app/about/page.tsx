"use client";
import Container from "@/components/global/Container";
import PageWrapper from "@/components/global/PageWrapper";
import PrimaryHeading from "@/components/heading/PrimaryHeading";
import TweenCarousel from "@/components/home/TweenCarousel";
import Grid2ColsLg from "@/components/layout/Grid2ColsLg";
import LightBlueBackground from "@/components/layout/LightBlueBackground";
import { nrobotFeatures } from "@/lib/constants";
import Image from "next/image";

const AboutPage = () => {
  return (
    <PageWrapper>
      <LightBlueBackground>
        <Container>
          <div className="py-20">
            <PrimaryHeading className="text-foreground mb-24 lg:mb-32 lg:text-7xl md:text-6xl text-5xl">
              About us
            </PrimaryHeading>
            <Grid2ColsLg>
              <div className="relative aspect-square lg:h-[600px] sm:h-[500px] h-[350px]">
                <Image
                  src="/about.png"
                  alt="Robot arm"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <TweenCarousel
                items={nrobotFeatures}
                duration={5000}
                className="sm:h-[600px]"
                renderSlide={(feature: {
                  title: string;
                  description: string;
                }) => (
                  <div className="p-8 font-ebGaramond">
                    <h2 className="text-4xl font-light  mb-10">
                      {feature.title}
                    </h2>
                    <p className="text-xl mt-2">{feature.description}</p>
                  </div>
                )}
              />
            </Grid2ColsLg>
          </div>
        </Container>
      </LightBlueBackground>
    </PageWrapper>
  );
};
export default AboutPage;

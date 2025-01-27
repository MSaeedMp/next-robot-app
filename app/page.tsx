import HeroVideo from "@/components/hero/MainHeroVideo";
import HeroContext from "@/components/hero/MainHeroContext";
import BlueBackground from "@/components/layout/BlueBackground";
import Container from "@/components/global/Container";
import VideoPlayer from "@/components/home/VideoPlayer";
import KeyFeatures from "@/components/home/KeyFeatures";
import LightBlueBackground from "@/components/layout/LightBlueBackground";
import ManualWorks from "@/components/home/ManualWorks";
import Grid2ColsXl from "@/components/layout/Grid2ColsXl";
import EasySolutions from "@/components/home/EasySolutions";
import BrandsContainer from "@/components/home/BrandsContainer";
import { groupedFeatures, headings } from "@/lib/constants";
import PrimaryHeading from "@/components/heading/PrimaryHeading";

const HomePage = () => {
  const automationFeatuers = groupedFeatures.automation;
  const hardwareFeatures = groupedFeatures.hardwareKit;
  const aiFeatures = groupedFeatures.aiSolutions;
  const { mainHeroHeading, mainHeroSubHeading } = headings;

  return (
    <>
      <section id="main-hero">
        <HeroVideo />
        <Container>
          <HeroContext
            heading={mainHeroHeading}
            subHeading={mainHeroSubHeading}
          />
        </Container>
      </section>
      <section id="features">
        <BlueBackground>
          <Container className="py-10 xl:py-20 space-y-10 xl:space-y-20">
            <Grid2ColsXl>
              <KeyFeatures
                heading={automationFeatuers.heading}
                subHeading={automationFeatuers.subHeading}
                features={automationFeatuers.features}
              />
              <VideoPlayer src="/key-video-1.mp4" className="rounded-lg" />
            </Grid2ColsXl>
            <Grid2ColsXl>
              <VideoPlayer src="/key-video-2.mp4" className="rounded-lg" />
              <KeyFeatures
                heading={hardwareFeatures.heading}
                subHeading={hardwareFeatures.subHeading}
                features={hardwareFeatures.features}
              />
            </Grid2ColsXl>
            <Grid2ColsXl>
              <KeyFeatures
                heading={aiFeatures.heading}
                subHeading={aiFeatures.subHeading}
                features={aiFeatures.features}
              />
              <VideoPlayer src="/key-video-3.mp4" className="rounded-lg" />
            </Grid2ColsXl>
          </Container>
        </BlueBackground>
      </section>
      <section id="automation">
        <LightBlueBackground>
          <Container>
            <ManualWorks />
            <EasySolutions />
          </Container>
        </LightBlueBackground>
      </section>
      <section id="brands" className="mb-10">
        <Container>
          <PrimaryHeading className="text-foreground mb-12 mt-16">
            You are not alone in our company
          </PrimaryHeading>
          <BrandsContainer />
        </Container>
      </section>
    </>
  );
};
export default HomePage;

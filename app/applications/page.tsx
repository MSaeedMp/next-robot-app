import Container from "@/components/global/Container";
import PageWrapper from "@/components/global/PageWrapper";
import PrimaryBlueGradientHeading from "@/components/heading/PrimaryBlueGradientHeading";
import PageHeroContext from "@/components/hero/PageHeroContext";
import BulletPoints from "@/components/home/BulletPoints";
import Grid2ColsLg from "@/components/layout/Grid2ColsLg";
import ImageContainer from "@/components/layout/ImageContainer";
import { MotionLeftToRight } from "@/components/motion/MotionLeftToRight";
import { MotionRightToLeft } from "@/components/motion/MotionRightToLeft";
import { applications, headings, navigation } from "@/lib/constants";

const ApplicationsPage = () => {
  const { applicationsHeroHeading, applicationsHeroSubHeading } = headings;

  return (
    <PageWrapper>
      <Container>
        <section id="applications-hero">
          <PageHeroContext
            image="/applications.webp"
            heading={applicationsHeroHeading}
            subHeading={applicationsHeroSubHeading}
          />
        </section>
        <section id="cnc-machine-loading">
          <PrimaryBlueGradientHeading>
            {navigation.applications[0].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <BulletPoints points={applications.cncMachineLoadingPoints} />
            </MotionLeftToRight>
            <MotionRightToLeft>
              <ImageContainer
                image="/task-1.png"
                alt="cnc machine loading image"
              />
            </MotionRightToLeft>
          </Grid2ColsLg>
        </section>
        <section id="laser-engravers">
          <PrimaryBlueGradientHeading>
            {navigation.applications[1].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <ImageContainer image="/task-2.png" alt="laser engravers image" />
            </MotionLeftToRight>{" "}
            <MotionRightToLeft>
              <BulletPoints points={applications.laserEngraversPoints} />
            </MotionRightToLeft>
          </Grid2ColsLg>
        </section>
        <section id="palletizing">
          <PrimaryBlueGradientHeading>
            {navigation.applications[2].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <BulletPoints points={applications.palletizingPoints} />
            </MotionLeftToRight>{" "}
            <MotionRightToLeft>
              <ImageContainer
                image="/task-3.png"
                alt="cnc machine loading image"
              />
            </MotionRightToLeft>
          </Grid2ColsLg>
        </section>
        <section id="material-handling">
          <PrimaryBlueGradientHeading>
            {navigation.applications[3].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <ImageContainer
                image="/task-4.png"
                alt="cnc machine loading image"
              />
            </MotionLeftToRight>
            <MotionRightToLeft>
              <BulletPoints points={applications.materialHandlingPoints} />
            </MotionRightToLeft>{" "}
          </Grid2ColsLg>
        </section>
        <section id="bin-picking">
          <PrimaryBlueGradientHeading>
            {navigation.applications[4].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <BulletPoints points={applications.binPickingPoints} />
            </MotionLeftToRight>{" "}
            <MotionRightToLeft>
              <ImageContainer
                image="/task-5.png"
                alt="cnc machine loading image"
              />
            </MotionRightToLeft>
          </Grid2ColsLg>
        </section>
        <section id="packaging">
          <PrimaryBlueGradientHeading>
            {navigation.applications[5].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <ImageContainer
                image="/task-6.png"
                alt="cnc machine loading image"
              />
            </MotionLeftToRight>
            <MotionRightToLeft>
              <BulletPoints points={applications.packagingPoints} />
            </MotionRightToLeft>{" "}
          </Grid2ColsLg>
        </section>
        <section id="grinding">
          <PrimaryBlueGradientHeading>
            {navigation.applications[6].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <BulletPoints points={applications.grindingPoints} />
            </MotionLeftToRight>{" "}
            <MotionRightToLeft>
              <ImageContainer
                image="/task-7.png"
                alt="cnc machine loading image"
              />
            </MotionRightToLeft>
          </Grid2ColsLg>
        </section>
        <section id="deburring">
          <PrimaryBlueGradientHeading>
            {navigation.applications[7].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <ImageContainer
                image="/task-8.png"
                alt="cnc machine loading image"
              />
            </MotionLeftToRight>
            <MotionRightToLeft>
              <BulletPoints points={applications.deburringPoints} />
            </MotionRightToLeft>{" "}
          </Grid2ColsLg>
        </section>
        <section id="welding" className="mb-20">
          <PrimaryBlueGradientHeading>
            {navigation.applications[8].title}
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <BulletPoints points={applications.weldingPoints} />
            </MotionLeftToRight>{" "}
            <MotionRightToLeft>
              <ImageContainer image="/task-9.png" alt="welding image" />
            </MotionRightToLeft>{" "}
          </Grid2ColsLg>
        </section>
      </Container>
    </PageWrapper>
  );
};
export default ApplicationsPage;

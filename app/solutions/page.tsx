import Container from "@/components/global/Container";
import PrimaryBlueGradientHeading from "@/components/heading/PrimaryBlueGradientHeading";
import PageWrapper from "@/components/global/PageWrapper";
import {
  headings,
  increasedQuality,
  laborShortagePoints,
  productivity,
  transparencyPoints,
} from "@/lib/constants";
import PriceTable from "@/components/home/PriceTable";
import ImageGridContainer from "@/components/layout/ImageGridContainer";
import IconGridContainer from "@/components/layout/IconGridContainer";
import Grid2ColsLg from "@/components/layout/Grid2ColsLg";
import ImageContainer from "@/components/layout/ImageContainer";
import BulletPoints from "@/components/home/BulletPoints";
import PageHeroContext from "@/components/hero/PageHeroContext";
import { MotionBottomToTop } from "@/components/motion/MotionBottoToTop";
import { MotionLeftToRight } from "@/components/motion/MotionLeftToRight";
import { MotionRightToLeft } from "@/components/motion/MotionRightToLeft";

const SolutionsPage = () => {
  const { solutionsHeroHeading, solutionsHeroSubHeading } = headings;

  return (
    <PageWrapper>
      <Container>
        <section id="solutions-hero">
          <PageHeroContext
            image="/solutions.webp"
            heading={solutionsHeroHeading}
            subHeading={solutionsHeroSubHeading}
          />
        </section>

        <section id="increase-productivity">
          <PrimaryBlueGradientHeading>
            Increase productivity
          </PrimaryBlueGradientHeading>
          <MotionBottomToTop>
            <IconGridContainer imageList={productivity} />
          </MotionBottomToTop>
        </section>

        <section id="decrease-costs">
          <PrimaryBlueGradientHeading>
            Decrease costs
          </PrimaryBlueGradientHeading>
          <MotionBottomToTop>
            <PriceTable />
          </MotionBottomToTop>
        </section>

        <section id="increase-quality">
          <PrimaryBlueGradientHeading>
            Increase production quality
          </PrimaryBlueGradientHeading>
          <MotionBottomToTop>
            <ImageGridContainer imageList={increasedQuality} />
          </MotionBottomToTop>{" "}
        </section>

        <section id="transparency">
          <PrimaryBlueGradientHeading>
            Transparency over your porduction
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <ImageContainer
                image="/transparency.png"
                alt="Transparency over production image"
              />
            </MotionLeftToRight>
            <MotionRightToLeft>
              <BulletPoints points={transparencyPoints} />
            </MotionRightToLeft>
          </Grid2ColsLg>
        </section>

        <section id="labor-shortage" className="mb-20">
          <PrimaryBlueGradientHeading>
            Solving labor shortage
          </PrimaryBlueGradientHeading>
          <Grid2ColsLg>
            <MotionLeftToRight>
              <BulletPoints points={laborShortagePoints} />
            </MotionLeftToRight>
            <MotionRightToLeft>
              <ImageContainer
                image="/labor-shortage.png"
                alt="labor shortage image"
              />
            </MotionRightToLeft>
          </Grid2ColsLg>
        </section>
      </Container>
    </PageWrapper>
  );
};
export default SolutionsPage;

import Link from "next/link";
import PrimaryButton from "../button/PrimaryButton";
import HeroHeading from "./MainHeroHeading";
import HeroSubHeading from "./MainHeroSubHeading";

const MainHeroContext = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="absolute z-10 md:top-[calc(100vh-26rem)] sm:top-[calc(100vh-28rem)] top-[calc(100vh-32rem)] max-w-[900px]">
      <HeroHeading>{heading}</HeroHeading>
      <HeroSubHeading>{subHeading}</HeroSubHeading>
      <Link href="/contact">
        <PrimaryButton text="Request a free demo" />
      </Link>
    </div>
  );
};
export default MainHeroContext;

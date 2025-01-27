import PageHeroHeading from "./PageHeroHeading";
import PageHeroImage from "./PageHeroImage";
import PageHeroSubHeading from "./PageHeroSubHeading";

const PageHeroContext = ({
  image,
  heading,
  subHeading,
}: {
  image: string;
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="relative">
      <PageHeroImage image={image} />
      <div className="absolute inset-0 bg-indigo-800 opacity-20 rounded-xl"></div>
      <div className="absolute lg:bottom-4 lg:left-4 left-2 bottom-2 space-y-1">
        <PageHeroHeading heading={heading} />
        <PageHeroSubHeading heading={subHeading} />
      </div>
    </div>
  );
};
export default PageHeroContext;

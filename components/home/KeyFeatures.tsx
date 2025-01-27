import { cn } from "@/lib/utils";
import PrimaryHeading from "../heading/PrimaryHeading";
import RobotArm from "../icon/RobotArm";
import PrimarySubHeading from "../heading/PrimarySubHeading";
import PrimaryButton from "../button/PrimaryButton";
import Link from "next/link";

type KeyFeaturesProps = {
  heading: string;
  subHeading: string;
  features: string[];
};

const KeyFeatures = ({ heading, subHeading, features }: KeyFeaturesProps) => {
  const numGridRows = Math.ceil(features.length / 2);
  return (
    <div className="py-4">
      <PrimaryHeading>{heading}</PrimaryHeading>
      <PrimarySubHeading className="my-10">{subHeading}</PrimarySubHeading>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2  gap-x-10 text-white",
          `sm:grid-rows-${numGridRows}`
        )}
      >
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-x-7 mb-8">
            <RobotArm /> <span>{feature}</span>
          </div>
        ))}
      </div>
      <Link href="/contact">
        <PrimaryButton className="my-4" />
      </Link>
    </div>
  );
};
export default KeyFeatures;

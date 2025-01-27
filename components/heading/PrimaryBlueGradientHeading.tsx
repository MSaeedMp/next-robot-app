import { cn } from "@/lib/utils";
import { MotionLeftToRight } from "../motion/MotionLeftToRight";

const PrimaryBlueGradientHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <MotionLeftToRight>
      <h1
        className={cn(
          "bg-gradient-to-r py-4 sm:text-6xl text-3xl font-ebGaramond font-light inline-block from-sky-500 to-slate-600 bg-clip-text text-transparent mt-20 mb-8 md:mt-20 md:mb-14 lg:mt-32  lg:mb-20",
          className
        )}
      >
        {children}
      </h1>
    </MotionLeftToRight>
  );
};
export default PrimaryBlueGradientHeading;

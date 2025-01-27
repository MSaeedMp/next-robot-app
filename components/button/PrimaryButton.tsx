import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const PrimaryButton = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "rounded-2xl text-base md:text-lg text-white border-cyan-300 border-2 bg-transparent hover:bg-transparent hover:border-white font-light px-4 py-6 md:px-6 md:py-7",
        className
      )}
    >
      <div className="rounded-2xl h-full flex items-center justify-center">
        {text ? text : "Contact sales"}
      </div>
    </Button>
  );
};
export default PrimaryButton;

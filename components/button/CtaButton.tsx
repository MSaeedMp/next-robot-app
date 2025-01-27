import Link from "next/link";
import { Button } from "../ui/button";
import { PiHeadsetThin } from "react-icons/pi";
import { cn } from "@/lib/utils";

const CtaButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href="/contact" className="mx-0">
      <Button
        size="lg"
        onClick={onClick}
        className={cn(
          "bg-gradient-to-r from-sky-400 to-sky-800 hover:bg-gradient-to-r hover:from-sky-800 hover:to-sky-800 text-base font-light rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg mx-0",
          className
        )}
      >
        <span>Contact us</span>
        <PiHeadsetThin className="!w-6 !h-6 text-white" />
      </Button>
    </Link>
  );
};
export default CtaButton;

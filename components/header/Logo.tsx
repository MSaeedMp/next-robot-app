import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  type,
  onClick,
  className,
}: {
  type: "dark" | "light";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "self-stretch h-full flex items-center focus:outline-stone-900",
        className
      )}
    >
      <Link href="/" onClick={onClick}>
        <div className="relative w-[135px] h-[60px] lg:w-[140px]">
          <Image
            src={`/logo-${type}.png`}
            alt="next robot logo"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            unoptimized
          />
        </div>
      </Link>
    </div>
  );
};
export default Logo;

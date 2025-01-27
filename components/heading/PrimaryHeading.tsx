import { cn } from "@/lib/utils";

const PrimaryHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-5xl font-ebGaramond leading-[1] tracking-tight text-white",
        className
      )}
    >
      {children}
    </h1>
  );
};
export default PrimaryHeading;

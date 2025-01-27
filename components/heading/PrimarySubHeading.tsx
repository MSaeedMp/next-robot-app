import { cn } from "@/lib/utils";

const PrimarySubHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-white font-light text-base", className)}>
      {children}
    </h3>
  );
};
export default PrimarySubHeading;

import { cn } from "@/lib/utils";

const Grid2ColsLg = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-14", className)}>
      {children}
    </div>
  );
};
export default Grid2ColsLg;

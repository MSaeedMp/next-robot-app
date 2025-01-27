import { cn } from "@/lib/utils";

const Grid2ColsMd = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-x-14", className)}>
      {children}
    </div>
  );
};
export default Grid2ColsMd;

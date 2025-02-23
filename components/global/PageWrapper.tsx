import { cn } from "@/lib/utils";

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "sm:pt-20 pt-16 w-screen bg-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
export default PageWrapper;

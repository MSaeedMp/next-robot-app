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
        "pt-24 w-screen bg-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
export default PageWrapper;

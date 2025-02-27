import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl xl:max-w-[1920px] sm:px-6 px-4 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;

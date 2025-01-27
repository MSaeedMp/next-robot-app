import { cn } from "@/lib/utils";

const BlueGradientHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "bg-gradient-to-r text-lg font-medium inline-block from-sky-500 to-slate-600 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </h2>
  );
};
export default BlueGradientHeading;

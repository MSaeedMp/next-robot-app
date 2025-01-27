import { cn } from "@/lib/utils";

const TextContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "md:px-8 md:py-12 px-6 py-8 rounded-xl border border-stone-200 bg-white text-sm md:text-base",
        className
      )}
    >
      {children}
    </div>
  );
};
export default TextContainer;

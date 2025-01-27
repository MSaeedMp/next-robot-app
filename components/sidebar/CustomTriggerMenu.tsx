"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { HiMenuAlt3 } from "react-icons/hi";
import { cn } from "@/lib/utils";

const CustomTriggerMenu = ({
  headerMode,
  className,
}: {
  headerMode: "white" | "transparent" | "colorful";
  className?: string;
}) => {
  const { toggleSidebar } = useSidebar();
  const handleToggle = () => {
    console.log("clicked");
    toggleSidebar();
  };
  return (
    <Button
      variant={"ghost"}
      onClick={handleToggle}
      className={cn(
        "flex justify-end px-3 py-6 hover:scale-110 transform transition-transform duration-300 hover:bg-transparent",
        className
      )}
    >
      <HiMenuAlt3
        className={cn(
          "!w-8 !h-8",
          headerMode === "transparent" ? "text-white" : "text-foreground"
        )}
      />
    </Button>
  );
};
export default CustomTriggerMenu;

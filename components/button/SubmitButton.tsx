import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";

type btnSize = "sm" | "lg" | "default" | "icon";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className={cn("capitalize rounded-xl bg-sky-500 hover:bg-sky-700 text-base py-6", className)}
      size={size}
    >
      {isSubmitting ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

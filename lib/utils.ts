import { ActionResponseType } from "@/utils/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendSuccessToast = (message: string): ActionResponseType => {
  return { status: "success", message };
};

export const sendErrorToast = (error?: unknown): ActionResponseType => {
  const errorMessage =
    error instanceof Error ? error.message : "An unexpected error occurred";
  return { status: "error", message: errorMessage };
};

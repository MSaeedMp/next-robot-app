"use client";

import MainLayout from "./MainLayout";

// import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  // Layout can be changed here
  //   const pathname = usePathname();
  return <>{<MainLayout>{children}</MainLayout>}</>;
};

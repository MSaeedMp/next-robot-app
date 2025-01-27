"use client";

import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider } from "@/components/ui/sidebar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
    </>
  );
};

export default Providers;

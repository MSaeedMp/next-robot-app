"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "../header/Logo";
import CustomTriggerClose from "./CustomTriggerClose";

import CtaButton from "../button/CtaButton";
import SidebarAccordion from "./SidebarAccordion";

const AppSidebar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar
      className="z-[1000]"
      side="right"
      variant="sidebar"
      collapsible="offcanvas"
    >
      <SidebarContent className="text-foreground text-base font-light bg-white">
        <SidebarGroup className="">
          <SidebarGroupLabel className="sm:mb-10 mt-7 mb-14 flex justify-between items-center pl-4">
            <Logo onClick={toggleSidebar} type="dark" />
            <CustomTriggerClose className="p-2 text-foreground" />
          </SidebarGroupLabel>
          <SidebarAccordion />
          <CtaButton onClick={toggleSidebar} className="mt-10 w-full" />
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
export default AppSidebar;

"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlueGradientHeading from "../heading/BlueGradientHeading";
import SidebarList from "./SidebarList";
import { navigation } from "@/lib/constants";
import { useState } from "react";
import Link from "next/link";
import { useSidebar } from "../ui/sidebar";

const SidebarAccordion = () => {
  const { applications, solutions } = navigation;
  const [activeItem, setActiveItem] = useState("item-1");
  const { toggleSidebar } = useSidebar();

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-6 space-y-6"
      onValueChange={(value) => setActiveItem(value)}
      value={activeItem}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger
          className="hover:no-underline"
          onMouseEnter={() => setActiveItem("item-1")}
        >
          <BlueGradientHeading>Solutions</BlueGradientHeading>
        </AccordionTrigger>
        <AccordionContent>
          <SidebarList list={solutions} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className="hover:no-underline"
          onMouseEnter={() => setActiveItem("item-2")}
        >
          <BlueGradientHeading>Applications</BlueGradientHeading>
        </AccordionTrigger>
        <AccordionContent>
          <SidebarList list={applications} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="pt-4 pb-4 border-b-0">
        <Link href="/about" onClick={toggleSidebar}>
          <BlueGradientHeading>About us</BlueGradientHeading>
        </Link>
      </AccordionItem>
    </Accordion>
  );
};
export default SidebarAccordion;

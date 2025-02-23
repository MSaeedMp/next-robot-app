"use client";
import Container from "../global/Container";
import Logo from "./Logo";
import CtaButton from "../button/CtaButton";
import CustomTriggerMenu from "../sidebar/CustomTriggerMenu";
import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [headerMode, setHeaderMode] = useState<"white" | "transparent" | "colorful">(
    pathname === "/" ? "transparent" : "colorful"
  );

  useEffect(() => {
    if (pathname !== "/") {
      setHeaderMode("colorful");
      return;
    }

    const handleScrollY = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setHeaderMode("white");
      } else {
        setHeaderMode("transparent");
      }
    };

    handleScrollY(); 
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, [pathname]);

  return (
    <header
      className={cn(
        "lg:bg-transparent bg-white w-full fixed left-0 top-0 z-40 transition-colors duration-300 ease-in-out",
        headerMode === "white"
          ? "!bg-white"
          : headerMode === "colorful"
          ? "!bg-neutral-50"
          : "!bg-transparent"
      )}
    >
      <Container className={cn(" w-full left-1/2  top-0 z-40 ")}>
        <div className="flex items-center justify-between sm:h-20 h-16">
          <div className="flex items-center gap-x-4 h-full">
            <Logo type={headerMode === "transparent" ? "light" : "dark"} />
            <Navigation mode={headerMode} />
          </div>
          <CtaButton className="hidden md:flex" />
          <CustomTriggerMenu headerMode={headerMode} className="md:hidden" />
        </div>
      </Container>
    </header>
  );
};

export default Header;

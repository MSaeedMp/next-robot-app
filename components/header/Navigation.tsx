"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import UR3eArm from "@/public/UR3e.png";
import { navigation } from "@/lib/constants";

export function Navigation({
  mode,
}: {
  mode: "white" | "transparent" | "colorful";
}) {
  const navigationMenuTriggerBaseClass =
    "text-base lg:text-base font-light px-6 py-6 bg-transparent";
  const navigationMenuTriggerClass = cn(
    mode === "transparent" ? "text-white" : "text-foreground",
    navigationMenuTriggerBaseClass
  );
  const { solutions, applications } = navigation;

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <Link href="/solutions"> */}
          <NavigationMenuTrigger className={navigationMenuTriggerClass}>
            Solutions
          </NavigationMenuTrigger>
          {/* </Link> */}
          <NavigationMenuContent>
            <ul className="grid grid-rows-3 gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/solutions"
                  >
                    <div className="relative aspect-square md:w-[200px] w-auto">
                      <Image
                        src={UR3eArm}
                        alt="ur3 robot arm"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              {solutions.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerClass}>
            Applications
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {applications.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                navigationMenuTriggerClass
              )}
            >
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

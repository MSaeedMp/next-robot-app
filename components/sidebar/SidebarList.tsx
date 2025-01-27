"use client";
import Link from "next/link";
import { useSidebar } from "../ui/sidebar";

type navigationItemType = {
  title: string;
  href: string;
  description: string;
};

const SidebarList = ({ list }: { list: navigationItemType[] }) => {
  const { toggleSidebar } = useSidebar();

  return (
    <ul className="space-y-4 pl-4">
      {list.map((sol) => (
        <li key={sol.title} className="text-base group">
          <Link
            href={sol.href}
            className="flex flex-col gap-2 group-hover:scale-105 transition-transform duration-100"
            onClick={toggleSidebar}
          >
            <h2>{sol.title}</h2>
            <span className="text-sm text-muted-foreground">
              {sol.description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default SidebarList;

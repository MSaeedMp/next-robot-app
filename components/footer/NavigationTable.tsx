import { navigation } from "@/lib/constants";
import { ContactCell } from "./ContactCell";
import { LinkList } from "./LinkList";
import Link from "next/link";
import Logo from "../header/Logo";

export const NavigationTable = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 md:py-20 py-14 capitalize text-stone-100">
      <div className="flex flex-col self-start gap-8 text-stone-300 font-light text-sm mb-10 lg:mb-0">
        <Logo type="light" />
        <p>
          <span className="font-semibold text-base">NRobot</span> <br />{" "}
          Dachauer Str. <br /> Munich 80993{" "}
        </p>
        <ContactCell title="General inquiries" email="example@test.io" />
        <ContactCell title="Contact sales" email="example@test.io" />
        <ContactCell title="Technical support" email="example@test.io" />
      </div>
      <LinkList title="Solutions" links={navigation.solutions} />
      <LinkList title="Applications" links={navigation.applications} />
      <div className="flex-col gap-2 flex">
        <Link className="text-white font-semibold" href="/about">
          <span className="border-b border-stone-300 pb-2">About us</span>
        </Link>
      </div>
    </div>
  );
};

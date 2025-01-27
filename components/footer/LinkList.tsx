import Link from "next/link";

export const LinkList = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) => {
  return (
    <div className="flex-col gap-6 flex mb-10 lg:mb-0">
      <Link
        className="text-white font-semibold"
        href={`/${title.toLowerCase()}`}
      >
        <span className="border-b border-stone-300 pb-2">{title}</span>
      </Link>
      {links.map((link) => (
        <Link className="font-light text-sm hover:underline" key={link.title} href={link.href}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

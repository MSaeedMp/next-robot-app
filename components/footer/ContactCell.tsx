export const ContactCell = ({
  title,
  email,
}: {
  title: string;
  email: string;
}) => {
  return (
    <div className="flex flex-col">
      <span className="border-b border-stone-300 pb-2 text-white w-fit">
        {title}
      </span>
      <a className="text-sm lowercase mt-2" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
};

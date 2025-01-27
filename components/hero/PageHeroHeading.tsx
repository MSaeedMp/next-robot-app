const PageHeroHeading = ({ heading }: { heading: string }) => {
  return (
    <h1 className="lg:text-5xl sm:text-4xl text-2xl font-base tracking-tighter font-ebGaramond leading-[1.2] capitalize text-gray-500 bg-white px-6 py-3 rounded-xl lg:max-w-[800px] sm:max-w-xl max-w-[300px]  border border-stone-200">
      {heading}
    </h1>
  );
};
export default PageHeroHeading;

const PageHeroSubHeading = ({ heading }: { heading: string }) => {
  return (
    <h3 className="lg:text-xl text-base sm:text-lg lg:max-w-[800px] text-gray-500 font-light font-ebGaramond leading-[1.2] tracking-tight bg-white px-6 py-3 rounded-xl border border-stone-200 sm:max-w-xl max-w-[300px]">
      {heading}
    </h3>
  );
};
export default PageHeroSubHeading;

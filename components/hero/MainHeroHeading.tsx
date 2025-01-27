const MainHeroHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-ebGaramond md:text-7xl sm:text-6xl text-5xl leading-[1] tracking-tighter font-light text-white">
      {children}
    </h1>
  );
};
export default MainHeroHeading;

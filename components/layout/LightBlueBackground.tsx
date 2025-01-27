const LightBlueBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-white">
      {children}
    </div>
  );
};
export default LightBlueBackground;

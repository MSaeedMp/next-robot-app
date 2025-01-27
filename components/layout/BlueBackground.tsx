const BlueBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-sky-950 to-slate-950">
      {children}
    </div>
  );
};
export default BlueBackground;

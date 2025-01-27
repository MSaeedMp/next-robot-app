import Footer from "../footer/Footer";
import Header from "../header/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;

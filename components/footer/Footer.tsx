import Container from "../global/Container";
import BlueBackground from "../layout/BlueBackground";
import CopyRight from "./CopyRight";
import { NavigationTable } from "./NavigationTable";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="text-white flex flex-col justify-between">
      <BlueBackground>
        <Container>
          <NavigationTable />
          <div className="flex-col md:border-t md:border-stone-300 py-6 md:flex-row flex md:justify-between items-center gap-4 mt-10 md:mt-14">
            <SocialMediaLinks />
            <CopyRight />
          </div>
        </Container>
      </BlueBackground>
    </footer>
  );
};
export default Footer;

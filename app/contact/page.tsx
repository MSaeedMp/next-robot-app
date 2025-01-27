import ContactForm from "@/components/form/ContactForm";

import Container from "@/components/global/Container";
import PageWrapper from "@/components/global/PageWrapper";
import TextContainer from "@/components/global/TextContainer";
import PrimaryHeading from "@/components/heading/PrimaryHeading";
import Grid2ColsLg from "@/components/layout/Grid2ColsLg";
import { getCountriesNameCode } from "@/services/services";
import { CustomCountryNameCodeType } from "@/utils/types";

const ContactPage = async () => {
  const countries: CustomCountryNameCodeType[] = await getCountriesNameCode();
  return (
    <PageWrapper>
      <Container>
        <PrimaryHeading className="text-foreground my-12 lg:my-20 lg:text-7xl md:text-6xl text-5xl">
          Contact Sales
        </PrimaryHeading>
        <Grid2ColsLg>
          <div className="mb-4 lg:mb-0">
            <TextContainer className="space-y-4">
              <div>
                <p>Email: </p>
                <a
                  href="mailto:saeed.mafipour@gmail.com"
                  className="text-muted-foreground hover:underline"
                >
                  saeed.mafipour@gmail.com
                </a>
              </div>
              <div>
                <p>Tel: </p>
                <a
                  href="tel:+9999999"
                  className="text-muted-foreground hover:underline"
                >
                  +99999999
                </a>
              </div>
            </TextContainer>
          </div>
          <TextContainer>
            <ContactForm countries={countries} />
          </TextContainer>
        </Grid2ColsLg>
      </Container>
    </PageWrapper>
  );
};
export default ContactPage;

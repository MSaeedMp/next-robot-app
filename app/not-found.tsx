import Container from "@/components/global/Container";
import PageWrapper from "@/components/global/PageWrapper";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col justify-center items-center lg:h-[calc(100vh-6rem) h-[calc(100vh-2rem)] -translate-y-40 text-center">
          <div className="relative h-32 lg:w-80 w-52">
            <Image
              src="/logo-dark.png"
              alt="Nrobot logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-contain"
            />
          </div>
          <h4 className="font-ebGaramond lg:text-5xl text-4xl">
            Page not found.
          </h4>
          <p className="text-base font-light text-muted-foreground mt-10 max-w-[300px] lg:max-w-[400px]">
            The page you are looking for does not exist or has been moved.
          </p>
          <p className="text-base font-light text-muted-foreground mt-5 max-w-[400px]">
            You can return to the homepage{" "}
            <Link href="/" className="font-bold">
              here
            </Link>
            .
          </p>
        </div>
      </Container>
    </PageWrapper>
  );
};
export default NotFound;

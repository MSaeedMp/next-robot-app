"use client"
import PageWrapper from "@/components/global/PageWrapper";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <PageWrapper>
      <div className="flex justify-center items-center w-screen h-[calc(100vh-6rem)] -translate-y-40 gap-4">
        <div className="relative h-48 lg:w-48 w-36">
          <Image
            src="/logo-dark.png"
            alt="Nrobot logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex gap-x-2 lg:gap-x-3">
          <div className="dot lg:w-4 w-3 aspect-square bg-black rounded-full"></div>
          <div className="dot lg:w-4 w-3 aspect-square bg-black rounded-full"></div>
          <div className="dot lg:w-4 w-3 aspect-square bg-black rounded-full"></div>
        </div>
      </div>
      <style jsx>{`
        .dot {
          animation: bounce 0.6s ease-in-out infinite;
        }
        .dot:nth-child(1) {
          animation-delay: 0s;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </PageWrapper>
  );
};

export default LoadingPage;

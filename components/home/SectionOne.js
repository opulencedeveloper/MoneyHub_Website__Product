import Image from "next/image";
import Link from "next/link";

const cardsImages = ["card1", "card2", "card3"];

const profileImages = ["profile1", "profile2", "profile3", "profile4"];

const SectionOne = () => {
  return (
    <div className="relative flex flex-col  pl-5 pt-36 top-0 z-0 bg-primary w-full h-max text-white space-y-10 md:pt-60 md:pl-10 lg:flex-row lg:h-screen lg:space-y-0 ">
      <div className="fixed top-0 right-5 text-white text-xs">
        Site developed by opulencedeveloper
      </div>

      <div className="w-full space-y-8 pr-5 lg:w-1/2 md:pr-auto md:pr-10">
        <div className="text-5xl font-medium md:text-7xl">
          Let us manage your <span className="text-secondary">finance</span> for
          you
        </div>
        <div className="font-medium text-xl md:text-2xl">
          This is the easiest way to secure your finance, manage and view your
          income and expenses
        </div>
        <div className="flex items-center space-x-5 ">
          <div className="w-max flex">
            {profileImages.map((profile, index) => {
              const margin = index !== 0 ? "-ml-8" : "";
              return (
                <Image
                  key={index}
                  loading="eager"
                  priority
                  src={`/images/${profile}.svg`}
                  alt="profile images"
                  className={`h-auto w-auto ${margin}`}
                  height={319.45}
                  width={600.63}
                />
              );
            })}
          </div>
          <div className="font-medium text-sm lg:text-xl">
            20,000 Active users
          </div>
        </div>
        <div className="flex pl-5 font-medium space-x-5">
          <Link href="/" className="py-3 px-6 text-lg bg-secondary md:text-xl">
            Get Started
          </Link>
          <Link
            href="/"
            className="py-3 px-6 text-lg text-secondary text-xl py-2 px-5 md:text-xl"
          >
            Try Demo
          </Link>
        </div>
      </div>
      <div className="relative w-full relative flex justify-end lg:w-1/2">
        <div className="absolute bg-pink-600 blur-8xl h-1/2 w-1/2 "></div>
        <div className="flex justify-end overflow-x-hidden w-full ">
          {cardsImages.map((card, index) => {
            const margin = index !== 2 ? "-mr-44" : "";
            return (
              <div className={margin} key={index}>
                <Image
                  src={`/images/${card}.svg`}
                  priority
                  alt="cards images"
                  className="h-auto w-auto"
                  height={319.45}
                  width={600.63}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

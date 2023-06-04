import Image from "next/image";
import Link from "next/link";

const cardsImages = ["card1", "card2", "card3"];

const profileImages = ["profile1", "profile2", "profile3", "profile4"];

const SectionOne = () => {
  return (
    <section className="absolute flex flex-col pl-10 pt-36 top-0 z-0 bg-primary w-full h-max text-white space-y-10 md:pt-60 lg:flex-row lg:h-screen lg:space-y-auto ">
      <div className="w-full space-y-8 pr-10 lg:w-1/2 md:pr-auto">
        <div className="text-5xl font-medium md:text-7xl">
          Let us manage your finance for you
        </div>
        <div className="text-lg font-medium">
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
                  src={`/images/${profile}.svg`}
                  alt="profile images"
                  className={`h-auto w-auto ${margin}`}
                  height={319.45}
                  width={600.63}
                />
              );
            })}
          </div>
          <div className="font-medium text-sm lg:text-lg">
            20,000 Active users
          </div>
        </div>
        <div className="flex font-medium space-x-5">
          <Link href="/" className="py-2 px-5 bg-secondary">
            Get Started
          </Link>
          <Link href="/" className="text-secondary py-2 px-5">
            Try Demo
          </Link>
        </div>
      </div>
      <div className="relative w-full relative flex justify-end lg:w-1/2">
        <div className="absolute bg-pink-600 blur-8xl h-1/2 w-1/2 "></div>
        <div className="flex justify-end w-full ">
          {cardsImages.map((card, index) => {
            const margin = index !== 2 ? "-mr-44" : "";
            return (
              <div className={margin} key={index}>
                <Image
                  src={`/images/${card}.svg`}
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
    </section>
  );
};

export default SectionOne;

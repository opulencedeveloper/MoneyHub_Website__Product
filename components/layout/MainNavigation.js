import Image from "next/image";
import Link from "next/link";

const linkContent = [
  { title: "Home", link: "/" },
  { title: "About", link: "/" },
  { title: "Pricing", link: "/" },
  { title: "Blogs", link: "/" },
];

const MainNavigation = () => {
  return (
    <nav className="flex px-10 text-white pt-7 justify-between absolute w-full z-10">
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center text-white rounded-full h-8 w-8 bg-primary2 h-14 w-14 text-2xl lg:text-4xl">
          I
        </div>
        <h1 className="font-medium text-lg">Money Hub</h1>
      </div>
      <div className="hidden lg:flex items-center space-x-14 ml-32 ">
        {linkContent.map((content, index) => (
          <div className="flex flex-col items-center">
            <Link className="text-xl" key={index} href={content.link}>
              {content.title}
            </Link>
            <Image
              src="/images/icon/underline.svg"
              className="w-14 h-2"
              width={72}
              height={8}
            />
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center font-medium text-lg space-x-8">
        <Link className="border border-secondary text-secondary py-2 px-5" href="/">
          {" "}
          Sign In
        </Link>{" "}
        <Link href="/" className="bg-secondary text-white py-2 px-5">
          {" "}
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default MainNavigation;

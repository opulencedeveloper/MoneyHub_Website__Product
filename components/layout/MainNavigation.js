import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Portal from "../UI/Portal";
import MobileNavigation from "./MobileNavigation";
import handleWhatsAppClick from "@/helpers/whatsapp";

const linkContent = [
  { title: "Home", link: "/" },
  { title: "About", link: "" },
  { title: "Pricing", link: "" },
  { title: "Blogs", link: "" },
];
let navAnimationClass = "";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };
  return (
    <nav className="flex px-5 text-white pt-7 items-center justify-between absolute w-screen z-10 md:px-10">
      <Portal>
        <div
          className={`fixed inset-y-0 -left-64 z-50 w-64 shadow-lg transform ${
            isOpen ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <MobileNavigation toggleDrawer={toggleDrawer} />
        </div>
      </Portal>
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center text-white rounded-full h-8 w-8 bg-primary2 text-2xl md:text-4xl md:h-14 md:w-14">
          I
        </div>
        <h1 className="font-medium text-lg">Money Hub</h1>
      </div>
      <div className="hidden lg:flex items-center space-x-14 ml-32 ">
        {linkContent.map((content, index) => (
          <div className="flex flex-col items-center" key={index}>
            {
              <Link
                className="text-xl"
                href={content.link}
                onClick={index === 0 ? null : handleWhatsAppClick}
              >
                {content.title}
              </Link>
            }
            {activeLink === content.link && (
              <Image
                src="/images/icon/underline.svg"
                alt="underline-icon"
                className="w-14 h-2"
                width={14}
                height={2}
              />
            )}
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center font-medium text-lg space-x-8">
        <Link
          className="border border-secondary text-secondary py-2 px-5"
          href="/"
        >
          {" "}
          Sign In
        </Link>{" "}
        <Link href="/" className="bg-secondary text-white py-2 px-5">
          {" "}
          Sign Up
        </Link>
      </div>
      <button
        className={`${navAnimationClass} block hamburger lg:hidden focus:outline-none`}
        type="button"
        onClick={toggleDrawer}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </nav>
  );
};

export default MainNavigation;

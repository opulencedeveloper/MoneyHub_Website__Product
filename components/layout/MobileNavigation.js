import Link from "next/link";
import { useRouter } from "next/router";

import handleWhatsAppClick from "@/helpers/whatsapp";

const pageContent = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "",
    title: "About",
  },
  {
    link: "",
    title: "Pricing",
  },
  {
    link: "",
    title: "Blogs",
  },
];

const MobileNavigation = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;
  const { toggleDrawer } = props;

  return (
    <div className="flex flex-col bg-white h-full ">
      <h1 className="font-medium text-3xl text-center bg-primary py-10 text-white">
        Money Hub
      </h1>
      <div className="space-y-5 bg-custom pt-5 w-full">
        {pageContent.map((content, index) => {
          const bgColor =
            activeLink === content.link ? "bg-secondary" : "bg-white";
          const textColor =
            activeLink === content.link ? "text-white" : "text-black";
          return (
            <Link
              href={content.link}
              key={index}
              onClick={index === 0 ? toggleDrawer : handleWhatsAppClick}
              className={`${bgColor} border-ash border-b cursor-pointer flex space-x-3 rounded-tr-md rounded-br-md py-3 pl-6`}
            >
              <p className={`font-semibold ${textColor}`}>{content.title}</p>
            </Link>
          );
        })}

        <div className="flex flex-col items-center font-medium text-lg space-y-5 md:hidden">
          <Link
            className="border border-secondary text-secondary py-2 px-5"
            href=""
          >
            {" "}
            Sign In
          </Link>{" "}
          <Link href="" className="bg-secondary text-white py-2 px-5">
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;

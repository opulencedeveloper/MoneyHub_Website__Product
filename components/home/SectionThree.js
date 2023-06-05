import Image from "next/image";

const SectionThree = () => {
  return (
    <form className="relative px-6 pt-20 pb-20 mx-10 mt-40 mb-32 flex flex-col items-center text-white rounded-2xl bg-primary md:mx-36">
      <Image
        height={631}
        width={1115}
        src="/images/worldmap.svg"
        className="border absolute top-0 left-0 right-0 bottom-0  h-full w-full"
      />
      <div className="font-bold text-3xl md:text-4xl">Contact Us</div>
      <div className="text-lg mt-1 md:text-xl text-center">
        Send your request directly to us
      </div>
      <input
        type="email"
        placeholder="Enter email address"
        className="mt-10 text-lg pl-5 w-full h-[56px] rounded-sm text-black md:w-[472px]"
      />
      <textarea
        placeholder="Your Message"
        className="mt-5 pl-5 pt-5 rounded-sm text-lg text-black resize-none w-full h-[138px] block px-auto md:w-[472px]"
      ></textarea>

      <button
        type="submit"
        className="mt-10 border border-secondary text-secondary py-2 px-7 font-semibold text-xl"
      >
        Send
      </button>
    </form>
  );
};

export default SectionThree;

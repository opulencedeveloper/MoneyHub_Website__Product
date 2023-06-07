import Image from "next/image";
import Link from "next/link";
import LineGraph from "../UI/LineChart";

const sectionContent = [
  {
    title: "01",
    subtitle: "Free of charge Payments",
    content:
      "MoneyHub is totally free for everyone to use. All you need is to get started by signing up",
  },
  {
    title: "02",
    subtitle: "Advanced Payer Verification",
    content:
      "This would aid money security protection from theft, stealing and cyber crimes",
  },
  {
    title: "03",
    subtitle: "Multidevice Support",
    content:
      "It aids fast delivery accross multiple channel, that is desktop, Laptops and tablets",
  },
];

const transactionContent = [
  {
    image: "netflix-icon",
    title: "Netflix Subscription",
    date: "21st June, 2022",
    amount: "-$300",
  },
  {
    image: "card-icon",
    title: "card Subscription",
    date: "21st June, 2022",
    amount: "-$360",
  },
  {
    image: "shoppingcart-icon",
    title: "Shopping Cart",
    date: "21st June, 2022",
    amount: "-$110",
  },
];

const chartData = [
  {
    name: "Data",
    data: [32, 20, 10, 38, 32, 32, 26, 31, 30, 40, 10, 40],
    color: "#1992D4",
  },
];

const SectionTwo = () => {
  return (
    <section className="px-5 pt-24 pb-10 z-0 md:px-10">
      <div className="font-semibold text-4xl text-center md:text-5xl">
        Why You Should Use
      </div>
      <div className="font-semibold text-4xl text-center text-secondary mb-3 text- md:text-5xl">
        MoneyHub
      </div>
      <div className="text-secondary2 text-center text-xl pt-3 mb-20 md:text-2xl">
        MoneyHub is a fast growing platform
      </div>
      <div className="flex flex-col space-y-10 space-x-auto mb-40 lg:flex-row lg:space-x-32 lg:space-y-0 xl:space-x-48">
        {sectionContent.map((content, index) => (
          <div key={index} className="space-y-2">
            <div className="font-semibold text-4xl text-secondary3 md:text-5xl">
              {content.title}
            </div>
            <div className="font-semibold text-2xl text-secondary3 md:text-3xl">
              {content.subtitle}
            </div>
            <div className="text-secondary2 text-xl md:text-2xl">
              {content.content}
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex flex-col space-y-8 justify-between mb-64 xl:flex-row xl:space-y-0">
        <div className="space-y-3 pr-auto md:pr-14">
          <div className="text-4xl font-semibold md:text-5xl">
            Monthly reports with statistical results
          </div>
          <div className="text-secondary2 text-xl md:text-2xl">
            Result are caried out everyday to find out and track income and
            expenses made by an individual or company as wellas providing
            finiancal advice for excessive spending.
          </div>
          <div className="pt-8">
            {" "}
            <Link
              href="/"
              className="font-medium text-xl py-3 px-5 bg-secondary text-white"
            >
              View Section
            </Link>{" "}
          </div>
        </div>

        <div className="flex w-full">
          <Image
            src="/images/phone.svg"
            alt="account statistics image"
            className="w-auto h-auto flex-1"
            width={706}
            height={551}
          />{" "}
        </div>
        <div className="p-2 absolute w-full  -bottom-52 bg-white shadow-4xl w-full md:-translate-x-1/2 md:transform md:left-1/2 md:w-[687px] md:bottom-0">
          <LineGraph productData={chartData} />
        </div>
      </div>

      <div className="flex flex-col space-y-44 justify-between space-x-auto md:flex-row md:space-y-0 md:space-x-5">
        <div className="w-full flex relative mb-[10rem] lg:mb-auto">
          <div>
            <div className="absolute right-0 -bottom-[18rem] bg-white p-5 rounded-md shadow-3xl w-full lg:w-2/3 lg:-bottom-32">
              <div className="flex justify-between w-full items-center mb-5">
                <div className="text-2xl font-semibold text-secondary3">
                  Latest transaction
                </div>{" "}
                <Link href="/">See All</Link>
              </div>
              <div className="space-y-5">
                {" "}
                {transactionContent.map((content, index) => (
                  <div
                    key={index}
                    className="flex items-center w-full justify-between"
                  >
                    <div className="flex space-x-2">
                      <Image
                        className="w-auto h-auto"
                        alt={content.title}
                        src={`/images/icon/${content.image}.svg`}
                        height={39.99}
                        width={39.99}
                      />
                      <div>
                        <div>{content.title}</div>{" "}
                        <div className="text-xs">{content.date}</div>
                      </div>
                    </div>
                    <div className="text-red-500 font-semibold">-$300</div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
          <Image
            src="/images/phone2.svg"
            alt="transaction history"
            className="w-auto h-auto flex-1 mr-20"
            width={706}
            height={551}
          />{" "}
        </div>
        <div className="space-y-3">
          <div className="text-4xl font-semibold md:text-5xl">
            Your transaction history is safe with us
          </div>
          <div className="text-secondary2 text-xl md:text-2xl">
            This help to see the entry and exit of money, so we could know and
            determine how of money is used and spent.
          </div>
          <div className="pt-8">
            {" "}
            <Link
              href="/"
              className="font-medium text-lg py-3 px-5 bg-secondary text-white  md:text-xl"
            >
              See More
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

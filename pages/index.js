import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import Layout from "@/components/layout/Layout";
import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Image
        src="/images/for-sale.png"
        alt="for sale"
        width={200}
        height={200}
        onClick={handleWhatsAppClick}
        className='h-auto w-auto fixed bottom-0 right-10 z-20 cursor-pointer'
      />
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </Layout>
    </>
  );
}

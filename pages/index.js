import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </Layout>
      <Footer />
    </>
  );
}

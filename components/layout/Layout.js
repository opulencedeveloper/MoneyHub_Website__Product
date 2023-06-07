import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      <Footer /> 
    </>
  );
};

export default Layout;

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
// import Products from "./Products";
// import Sales from "./Sales";
// import Purchases from "./Purchases";

function Index() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Home></Home>
      {/* <Products></Products> */}
      {/* <Sales></Sales> */}
      <Footer></Footer>
    </>
  );
}

export default Index;

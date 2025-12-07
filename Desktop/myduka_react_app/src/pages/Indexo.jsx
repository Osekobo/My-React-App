import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/navbar";
import Products from "../components/Products";
import Sales from "../components/Sales";
import Purchases from "../components/Purchases";

function Index() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Products></Products>
      <Sales></Sales>
      <Purchases></Purchases>
      <Footer></Footer>
    </>
  );
}

export default Index;

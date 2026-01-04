import Footer from "../components/Footer";
// import HeroSection from "./Home.jsx";
import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";
import Home from "./Home";
import Hero from "./Hero.jsx"
import Search from "./Search.jsx";
import Collection from "./Collection.jsx";
import Categoreis from "./Categories.jsx";
import Question from "./Question.jsx";
import Why from "./Why.jsx";
import Testimonials from "./Testimonials.jsx";
import Blogs from "./Blogs.jsx";
import Action from "./Action.jsx";

function Index() {
  return (
    <>
      <Navbar></Navbar>
      <Topnav />
      {/* <HeroSection></HeroSection> */}
      <Home></Home>
      <Hero />
      <Search />
      <Collection />
      <Categoreis />
      <Question />
      <Why />
      <Testimonials />
      <Blogs />
      <Action />
      <Footer></Footer>
    </>
  );
}

export default Index;

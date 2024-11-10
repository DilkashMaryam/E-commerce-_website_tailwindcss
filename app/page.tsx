import Image from "next/image";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Deals from "./components/Deals/page";
import Footer from "./components/Footer/Footer";



const Home = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Deals/>
      <Footer></Footer>
    </div>
  );
}
export default Home
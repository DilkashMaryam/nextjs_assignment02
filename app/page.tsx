import Image from "next/image";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}
export default Home
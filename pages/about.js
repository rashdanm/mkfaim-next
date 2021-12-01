import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import AboutHero from "../assets/hero-about.jpg";
import Fade from "react-reveal/Fade";
import Hero from "../components/Hero/Hero";
import MainText from "../components/MainText/MainText";
import faim from "../assets/about/faim.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainText
        heading="Nice to meet you"
        p1="My name is Faim and im a London based photographer working across the UK who looks to
        create a story at every event I attend. The best part about doing this job is the amazing
        clients that I meet and how some turn into amazing friends!"
        image="/images/about/faim1.jpg"
        showImage="block"
        display="none"
      />

      <Footer />
    </>
  );
};

export default About;

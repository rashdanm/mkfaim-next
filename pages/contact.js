import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import MainText from "../components/MainText/MainText";
import Navbar from "../components/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Contact" text="Let's make it happen" imageId="contact" />
      <div className="main-section">
        <MainText
          showImage="none"
          heading="Let's make it happen"
          p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus. Leo vel fringilla est ullamcorper eget nulla. Amet purus gravida quis blandit turpis cursus in. Tortor posuere ac ut consequat semper viverra nam libero."
          display="none"
        />
        <Form />

        <Footer />
      </div>
    </div>
  );
};

export default Contact;

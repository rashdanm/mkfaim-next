import styles from "../styles/About.module.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import MainText from "../components/MainText/MainText";
import aboutInfo from "../data/aboutInfo";
const About = () => {
  return (
    <>
      <Navbar />
      <Hero heading="About" text="Nice to meet you" imageId="about" />
      <MainText
        heading="Nice to meet you"
        p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida arcu ac. Amet nisl purus in mollis nunc. Sit amet nisl purus in mollis nunc sed id. Vitae tempus quam pellentesque nec nam aliquam sem. Tristique sollicitudin nibh sit amet commodo nulla facilisi. In metus vulputate eu scelerisque felis imperdiet proin."
        p2="Diam ut venenatis tellus in metus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Potenti nullam ac tortor vitae. Iaculis urna id volutpat lacus. Nibh sit amet commodo nulla. Egestas congue quisque egestas diam. Risus nec feugiat in fermentum posuere urna nec tincidunt. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin."
        p3="Quam viverra orci sagittis eu volutpat. Etiam dignissim diam quis enim. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt."
        showImage="none"
        display="none"
      />

      <div className={styles["card-section"]}>
        {aboutInfo.map((item) => (
          <Card
            src={"/images/about/" + item.image + ".jpg"}
            heading={item.heading}
            text={item.text}
          />
        ))}
      </div>
      <MainText
        heading="View Gallery"
        p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum nunc."
        showImage="none"
        text="Gallery"
        href="/gallery"
      />

      <Footer />
    </>
  );
};

export default About;

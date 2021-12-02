import styles from "../styles/Faq.module.css";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";
import faqInfo from "../data/faqInfo";

const Faq = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles["main"]}>
        {faqInfo.map((item) => (
          <Accordion title={item.question} content={item.answer} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Faq;

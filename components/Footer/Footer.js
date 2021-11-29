import styles from "./Footer.module.css";
import { FaSnapchatSquare, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/gallery", text: "Gallery" },
    { href: "/faq", text: "FAQs" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-top"]}>
        <div className={styles["logo-wrapper"]}>
          <div className={styles["footer-logo"]}>MKFAIM</div>
        </div>
        <p>Specialist in Asian Wedding Photography</p>
      </div>
      <hr />
      <div className={styles["footer-middle"]}>
        <ul className={styles["footer-menu"]}>
          {links.map((link) => (
            <Link href={link.href} className={styles["footer-link"]}>
              <li>{link.text}</li>
            </Link>
          ))}
          {/* <li>
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="footer-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="footer-link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/faq" className="footer-link">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
      <hr />
      <div className={styles["footer-bottom"]}>
        <p>info@mkfaim.co.uk</p>
        <div className={styles["socialIcons-container"]}>
          <div className={styles["social-icon"]}>
            <a href="https://www.instagram.com/mkfaim/?hl=en" target="_blank">
              <FaSnapchatSquare size="42" />
            </a>
          </div>
          <div className={styles["social-icon"]}>
            <a href="https://www.instagram.com/mkfaim/?hl=en" target="_blank">
              <FaInstagram size="42" />
            </a>
          </div>
        </div>
      </div>
      <h5>&copy; MK Faim {currentYear}, created by rashdan</h5>
    </footer>
  );
};

export default Footer;

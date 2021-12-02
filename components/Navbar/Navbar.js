import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/gallery", text: "Gallery" },
    { href: "/faq", text: "FAQs" },
    { href: "/contact", text: "Contact" },
  ];
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const [navbar, setNavbar] = useState(false);

  const changeStyle = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
    return () => window.removeEventListener("scroll", changeStyle);
  });

  return (
    <nav
      className={
        navbar ? `${styles["navbar"]} ${styles["active"]}` : styles["navbar"]
      }
    >
      <div className={styles["navbar-container"]}>
        <div className={styles["logo-wrapper"]}>
          <Link href="/">
            <div
              className={styles["navbar-logo"]}
              style={click || !navbar ? { color: "white" } : { color: "black" }}
              onClick={closeMenu}
            >
              MKFAIM
            </div>
          </Link>
        </div>
        <div
          className={styles["menu-btn"]}
          onClick={handleClick}
          style={click || !navbar ? { color: "white" } : { color: "black" }}
        >
          {click ? <FaTimes /> : <FiMenu />}
        </div>
        <ul
          className={
            click
              ? `${styles["nav-menu"]} ${styles["active"]}`
              : styles["nav-menu"]
          }
        >
          {links.map((link) => (
            <Link href={link.href}>
              <li
                className={styles["nav-link"]}
                style={
                  click || !navbar ? { color: "white" } : { color: "black" }
                }
                onClick={closeMenu}
              >
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

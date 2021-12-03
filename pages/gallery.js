import styles from "../styles/Gallery.module.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { SRLWrapper } from "simple-react-lightbox";
import galleryInfo from "../data/galleryInfo";
import Fade from "react-reveal/Fade";

const options = {
  settings: {
    autoplaySpeed: 2700,
    overlayColor: "rgba(0, 0, 0, 0.95)",
  },
  buttons: {
    iconColor: "rgba(255, 255, 255, 0.9)",
    backgroundColor: "transparent",
    showDownloadButton: false,
  },
  caption: {
    showCaption: false,
  },
};

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Hero imageId="gallery" text="view the collection" heading="Gallery" />
      <div className="main-section">
        <SRLWrapper options={options}>
          <div className={styles["gallery-wrapper"]}>
            <div className={styles["gallery-container"]}>
              {galleryInfo.map((item) => (
                <Fade key={item.id}>
                  <div
                    className={styles["gallery-img"]}
                    id={styles[item.title]}
                  >
                    <img
                      className={styles["image"]}
                      src={"/images/gallery/" + item.title + ".jpg"}
                      alt="wedding"
                    />
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </SRLWrapper>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;

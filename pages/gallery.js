import styles from "../styles/Gallery.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { SRLWrapper } from "simple-react-lightbox";
import galleryInfo from "../data/galleryInfo";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/server/image-config";

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
    <div>
      <Navbar />
      <SRLWrapper options={options}>
        <div className="gallery-wrapper">
          <div className="gallery-container">
            {galleryInfo.map((item) => (
              <div className="gallery-img" id={item.title}>
                <img
                  className="image"
                  src={"/images/gallery/" + item.title + ".jpg"}
                  alt="wedding"
                />
              </div>
            ))}
          </div>
        </div>
      </SRLWrapper>

      <Footer />
    </div>
  );
};

export default Gallery;

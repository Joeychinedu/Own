import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import styles from "./Carousel.module.css";
import SmallTitle from "../ui/SmallTitle";

function Carousel() {
  return (
    <div className={styles.carousel}>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={100}
        nav
        items={2}
        center
        autoWidth
      >
        <div className={styles.carouselItem}>
          <SmallTitle title="Art" bgColor="#003dff" />
          <p>Stan Culture In Nigeria</p>
          <img src="../../images/rema-performing.jpg" alt="art" />
        </div>
        <div className={styles.carouselItem}>
          <SmallTitle title="Art" bgColor="#003dff" />
          <p>The Power Of Cover Art</p>
          <img src="../../images/cover-art.jpg" alt="art" />
        </div>
        <div className={`${styles.carouselItem} ${styles.lastItem} `}>
          <SmallTitle title="Art" bgColor="#003dff" />
          <p>5 fantasy fictions novels that should be in your library</p>
          <img src="../../images/books.png" alt="art" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carousel;

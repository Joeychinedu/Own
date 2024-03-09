import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import styles from "./Carousel.module.css";
import SmallTitle from "../ui/SmallTitle";
import { Link } from "react-router-dom";

const responsive = {
  600: {
    items: 4,
  },
};

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
        responsive={responsive}
      >
        <div className={styles.carouselItem}>
          <SmallTitle title="music" to="music" bgColor="#003dff" />
          <Link to="music/stanculture">
            <p>Stan Culture In Nigeria</p>
          </Link>
          <img src="../../images/rema-performing.jpg" alt="music" />
        </div>

        <div className={styles.carouselItem}>
          <SmallTitle title="Music" bgColor="#003dff" to="music" />
          <Link to="music/tiktok">
            <p>What TikTok did to Nigerian Music</p>
          </Link>
          <img src="../../images/tiktok.webp" alt="music" />
        </div>

        <div className={`${styles.carouselItem} ${styles.lastItem} `}>
          <SmallTitle title="Books" bgColor="#003dff" to="books" />
          <Link to="books/booksyoushouldread">
            <p>Books You Should Read</p>
          </Link>
          <img src="../../images/books.webp" alt="books" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carousel;

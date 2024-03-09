import { Link } from "react-router-dom";
import ByOwn from "../ui/ByOwn";
import SmallTitle from "../ui/SmallTitle";
import styles from "./CoverHeader.module.css";

function CoverHeader({ image, alt, title, content, to }) {
  return (
    <div>
      <div className={styles.homeCover}>
        <img src={image} alt={alt} />
      </div>

      <div className={styles.homeHeader}>
        <SmallTitle title={title} bgColor="#003dff" to={to} />
        <Link to={to}>
          <h1 className={styles.homeSubTitle}>{content}</h1>
        </Link>
        <ByOwn />
      </div>
    </div>
  );
}

export default CoverHeader;

import ByOwn from "../ui/ByOwn";
import SmallTitle from "../ui/SmallTitle";
import styles from "./CoverHeader.module.css";

function CoverHeader({ image, alt, title, content }) {
  return (
    <div>
      <div className={styles.homeCover}>
        <img src={`../../images/${image}`} alt={alt} />
      </div>

      <div className={styles.homeHeader}>
        <SmallTitle title={title} bgColor="#003dff" />
        <h1 className={styles.homeSubTitle}>{content}</h1>
        <ByOwn />
      </div>
    </div>
  );
}

export default CoverHeader;

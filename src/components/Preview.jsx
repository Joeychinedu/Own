import styles from "./Preview.module.css";
import SmallTitle from "../ui/SmallTitle";
import ByOwn from "../ui/ByOwn";
import { Link } from "react-router-dom";

function Preview({ content, category }) {
  return (
    <div className={styles.preview}>
      {content.map((item) => (
        <PreviewItem item={item} category={category} key={item.id} />
      ))}
    </div>
  );
}

function PreviewItem({ item, category }) {
  return (
    <div className={styles.previewItem}>
      <SmallTitle title={category} bgColor="#003dff" pad={".3rem .7rem"} />
      <img src={item.CoverImage} alt="music" />
      <div className={styles.up}>
        <h4>
          <Link to={item.link}>{item.title}</Link>
        </h4>
        <ByOwn />
      </div>
    </div>
  );
}

export default Preview;

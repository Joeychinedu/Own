import Advert from "../ui/Advert";
import Related from "../ui/Related";
import styles from "./Content.module.css";

function Content({ children }) {
  return (
    <div className={styles.content}>
      <div className={styles.contentAuthor}></div>
      <div className={styles.contentWriteUp}>
        <p>{children}</p>
      </div>
      <div className={styles.contentSidebar}>
        <Advert />
        <Related />
      </div>
    </div>
  );
}

export default Content;

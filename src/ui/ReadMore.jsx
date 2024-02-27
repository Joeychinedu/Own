import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import styles from "./ReadMore.module.css";

function ReadMore({ to }) {
  return (
    <div className={styles.readMore}>
      <span>Read more</span>
      <div className={styles.arrow}>
        <Link to={to}>
          <BsArrowRight size={"3rem"} />
        </Link>
      </div>
    </div>
  );
}

export default ReadMore;

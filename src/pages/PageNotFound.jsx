import { BiSolidError } from "react-icons/bi";
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className={styles.pnf}>
      <BiSolidError
        color="#d04441"
        size={65}
        // color="#FFD700"
      />
      <h2>Page not found</h2>
      <h4>We couldn't find the page you're looking for. (404 Error)</h4>
      <p>
        The page you requested could not be found or it is currently
        unavailable. Please{" "}
        <span>
          <Link to="/">click here</Link>
        </span>{" "}
        to go back to our homepage.
      </p>
    </div>
  );
}

export default PageNotFound;

import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo({ type }) {
  return (
    <div>
      <Link to="/">
        <img className={styles.logo} src={`../../images/${type}`} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;

import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import styles from "./Author.module.css";

function Author({ name, authorImage }) {
  return (
    <div className={styles.author}>
      <img src={authorImage} alt="author" />
      <span>By - {name}</span>
      <ul className={styles.authorInner}>
        {/* <li>
          <FaFacebookF color="rgba(0,0,0,.2)" size={20} />
        </li> */}
        <li>
          <a href="https://twitter.com/theownmag?s=21&t=nR6wKyGySAofXYlbmeRlyg">
            <FaTwitter color="rgba(0,0,0,.2)" size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/theownmagazine/?utm_source=qr">
            <FaInstagram color="rgba(0,0,0,.2)" size={20} />
          </a>
        </li>
        <li>
          {/* <a href="#"> */}
          <FaPinterest color="rgba(0,0,0,.2)" size={20} />
          {/* </a> */}
        </li>
      </ul>
    </div>
  );
}

export default Author;

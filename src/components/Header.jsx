import styles from "./Header.module.css";

import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <ul className={styles.headerList}>
        <Link to="about">
          <li>About</li>
        </Link>
        <Link to="music">
          <li>Music</li>
        </Link>
        <Link to="lifestyle">
          <li>Styles</li>
        </Link>
        <Link to="film">
          <li>Film</li>
        </Link>
        <Link to="art">
          <li>Art</li>
        </Link>
        <Link to="contact">
          <li>Contact</li>
        </Link>
      </ul>
      <ul className={styles.headerSub}>
        <Link to="search">
          <li>
            <IoIosSearch size={"1.5rem"} />
          </li>
        </Link>
        <Link to="login">
          <li>
            <IoPerson size={"1.5rem"} />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;

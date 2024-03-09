import styles from "./Header.module.css";

import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <Logo type="LOGO-TOP.png" />
        <ul className={styles.headerList}>
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
          <Link to="books">
            <li>Books</li>
          </Link>
          <Link to="support">
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
        <button className={styles.btn} onClick={() => setIsOpen(true)}>
          <FiMenu color="#2f184b" size={30} />
        </button>
      </div>
      <div
        className={`${styles.headerSmall} ${
          isOpen ? styles.navOpen : styles.navClose
        }`}
      >
        <Logo type="LOGO-TOP.png" />
        <button className={styles.btnClose} onClick={() => setIsOpen(false)}>
          <FaTimes color="#2f184b" size={30} />
        </button>
        <ul className={styles.headerListSmall}>
          <Link to="music">
            <li onClick={() => setIsOpen(false)}>Music</li>
          </Link>
          <Link to="lifestyle">
            <li onClick={() => setIsOpen(false)}>Styles</li>
          </Link>
          <Link to="film">
            <li onClick={() => setIsOpen(false)}>Film</li>
          </Link>
          <Link to="art">
            <li onClick={() => setIsOpen(false)}>Art</li>
          </Link>
          <Link to="books">
            <li onClick={() => setIsOpen(false)}>Books</li>
          </Link>
          <Link to="support">
            <li onClick={() => setIsOpen(false)}>Contact</li>
          </Link>
        </ul>
        <ul className={styles.headerSubSmall}>
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
    </>
  );
}

export default Header;

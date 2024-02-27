import Logo from "../ui/Logo";
import SmallTitle from "../ui/SmallTitle";
import styles from "./Footer.module.css";

import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <Logo />
      <div className={styles.firstFlex}>
        <SmallTitle title="ABOUT" to="about" />
        <SmallTitle title="CONTACT" to="contact" />
        <SmallTitle title="Author" to="author" />
        <SmallTitle title="HELP" to="support" />
      </div>
      <div className={styles.secondFlex}>
        <span>
          <FaTwitter />
        </span>
        <span>
          <IoLogoInstagram />
        </span>
        <span>
          <FaFacebookF />
        </span>
      </div>
    </div>
  );
}

export default Footer;

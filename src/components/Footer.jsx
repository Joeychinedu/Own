import Logo from "../ui/Logo";
import SmallTitle from "../ui/SmallTitle";
import styles from "./Footer.module.css";

import { FaPinterest, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <Logo type="LOGO-FOOTER.png" />
      <div className={styles.firstFlex}>
        <SmallTitle title="ABOUT" to="about" />
        <SmallTitle title="CONTACT" to="contact" />
        {/* <SmallTitle title="Author" to="author" /> */}
        <SmallTitle title="HELP" to="support" />
      </div>
      <div className={styles.secondFlex}>
        <span>
          <a href="https://twitter.com/theownmag?s=21&t=nR6wKyGySAofXYlbmeRlyg">
            <FaTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/theownmagazine/?utm_source=qr">
            <IoLogoInstagram />
          </a>
        </span>
        <span>
          {/* <a href="#"> */}
          <FaPinterest />
          {/* </a> */}
        </span>
      </div>
    </div>
  );
}

export default Footer;

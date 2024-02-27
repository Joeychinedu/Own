import styles from "./Advert.module.css";

function Advert() {
  return (
    <div className={styles.advert}>
      <div className={styles.advertInner}>
        <h2>Your brand here</h2>
      </div>
      <p>A new kind of advertising for the internet</p>
      <button>Advertise</button>
    </div>
  );
}

export default Advert;

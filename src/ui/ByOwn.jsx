import styles from "./ByOwn.module.css";

function ByOwn({ styled }) {
  return (
    <div>
      <p className={styles.p} style={{ marginLeft: styled }}>
        By<span className={styles.homeAuthor}> OWN</span>
      </p>
    </div>
  );
}

export default ByOwn;

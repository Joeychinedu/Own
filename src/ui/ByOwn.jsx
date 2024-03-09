import styles from "./ByOwn.module.css";

function ByOwn({ styled, name }) {
  return (
    <div>
      <p className={styles.p} style={{ marginLeft: styled }}>
        By<span className={styles.homeAuthor}> {name || "OWN"}</span>
      </p>
    </div>
  );
}

export default ByOwn;

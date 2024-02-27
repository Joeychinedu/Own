import { useState } from "react";
import styles from "./Related.module.css";
import SmallTitle from "./SmallTitle";

const music = [
  { id: 0, title: "dfnk3rjf3rm fj3kf", image: "2" },
  { id: 1, title: "dfnk3rjf3rm fj3kf", image: "2" },
  { id: 2, title: "dfnk3rjf3rm fj3kf", image: "2" },
  { id: 3, title: "dfnk3rjf3rm fj3kf", image: "2" },
];

function Related() {
  const [previous, setPrevious] = useState();

  return (
    <div className={styles.related}>
      <p className={styles.relatedP}>Related</p>
      <div className={styles.relatedContentBox}>
        {music.map((el) => (
          <RelatedMini
            category={el.category}
            title={el.title}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
}

function RelatedMini({ category, title, image }) {
  return (
    <div className={styles.relatedContent}>
      <img src={`../../images/${image}.jpg`} alt="" />
      <SmallTitle title="Music" bgColor="#003dff" />
      <h3>{title}</h3>
    </div>
  );
}

export default Related;

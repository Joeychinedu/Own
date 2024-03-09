import { useState } from "react";
import styles from "./Related.module.css";
import SmallTitle from "./SmallTitle";
import { Link } from "react-router-dom";

function Related({ related, category, to }) {
  const [previous, setPrevious] = useState();

  if (related.length !== 0)
    return (
      <div className={styles.related}>
        <p className={styles.relatedP}>Related</p>
        <div className={styles.relatedContentBox}>
          {related?.map((el) => (
            <RelatedMini
              title={el.title}
              image={el.CoverImage}
              category={category}
              key={el.title}
              to={`${to}/${el.link}`}
            />
          ))}
        </div>
      </div>
    );
}

function RelatedMini({ category, title, image, to }) {
  return (
    <div className={styles.relatedContent}>
      <img src={image} alt="" />
      <SmallTitle title={category} bgColor="#003dff" to={to} />
      <Link to={to}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default Related;

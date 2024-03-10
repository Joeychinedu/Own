import insertParagraphs from "../helpers/insertParagraphs";
import Advert from "../ui/Advert";
import Author from "../ui/Author";
import Related from "../ui/Related";
import styles from "./Content.module.css";

// Example usage:
// const originalContent = "Your blog content here...";
// const formattedContent = insertParagraphs(originalContent);

// Now you can use `formattedContent` in your React component or wherever you display the blog content

function Content({
  children,
  related,
  category,
  image,
  to,
  authorName,
  authorImage,
}) {
  const displayContent = insertParagraphs(children);
  return (
    <div className={styles.content}>
      <div className={styles.contentAuthor}>
        <Author name={authorName} authorImage={authorImage} />
      </div>
      <div className={styles.contentWriteUp}>
        <img src={image} alt="" />
        <div dangerouslySetInnerHTML={{ __html: displayContent }}></div>
      </div>
      <div className={styles.contentSidebar}>
        <Advert />
        <Related related={related} category={category} to={to} />
      </div>
    </div>
  );
}

export default Content;

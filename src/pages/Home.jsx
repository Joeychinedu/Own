import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import SmallTitle from "../ui/SmallTitle";
import ByOwn from "../ui/ByOwn";
import ReadMore from "../ui/ReadMore";
import Editor from "../ui/Editor";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import Advert from "../ui/Advert";
import Carousel from "../components/Carousel";
import CoverHeader from "../components/CoverHeader";
import { useCategories } from "../features/tools/useCategories";
import { useLifestyles } from "../features/tools/useLifestyle";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoading: isLoadingCategories, category } = useCategories();
  const { isLoading: isLoadingStyles, posts } = useLifestyles();

  const matchCategory = category?.filter((el) => el.id === 2);

  const matchCategoryItems = posts?.filter((el) => el.CategoryId === 2);

  const relatedCategoryItems = posts?.filter(
    (el) =>
      el.CategoryId === 2 &&
      el.title !== "Misogyny in the Nigerian Creative Scene"
  );

  const DisplayCategory = matchCategory?.filter((el) => el.name === "Music");
  const DisplayCategoryItem = matchCategoryItems?.filter(
    (el) => el.title === "Misogyny in the Nigerian Creative Scene"
  );

  return !matchCategoryItems ? (
    <Spinner />
  ) : (
    <>
      <CoverHeader
        image={DisplayCategoryItem?.at(0).CoverImage}
        title={DisplayCategory?.at(0).name}
        alt={DisplayCategory?.at(0).name}
        content={DisplayCategoryItem?.at(0).title}
        to={`/music/${DisplayCategoryItem?.at(0).link}`}
      />
      <div className={styles.homeGrid}>
        <div>
          <SmallTitle
            title="lifestyle"
            bgColor="none"
            styled="-1rem"
            to="lifestyle"
          />
          <div>
            <h3 className={styles.homeSubHead1}>
              <Link to="lifestyle/gk">Gifted kid burnout</Link>
            </h3>
            <p className={styles.headPost}>
              “You used to be so smart”, “Why are you unenthusiastic about
              School?”, “Se gbogbo wa dara?”And after all this questions your
              attitude towards school and school induced learning remains sour.
              Instead of trying to...
            </p>
          </div>
          <img
            className={styles.homeGridImg1}
            src="../../images/gifted-kid.webp"
            alt="Gifted kid"
          />
          <ReadMore to="lifestyle/gk" />
        </div>
        <div>
          <SmallTitle title="Film" bgColor="none" styled="-1rem" to="film" />
          <div>
            <h3 className={styles.homeSubHead1}>
              <Link to="film/cinematic2">
                Cinematic Misfits : The Rise Of Nigerian Animation
              </Link>
            </h3>
            <p className={styles.headPost}>
              Netflix’s acquisition of the first Nigerian...
            </p>
          </div>
          <img
            className={styles.homeGridImg1}
            src="../../images/animation.webp"
            alt="Cinematic"
          />
          <ReadMore to="film/cinematic2" />
        </div>
        <div>
          <SmallTitle title="Music" bgColor="none" styled="-1rem" to="music" />
          <div>
            <h3 className={styles.homeSubHead1}>
              <Link to="music/alte101">Alte 101</Link>
            </h3>
            <p className={styles.headPost}>
              Coined from the word alternative, the term alté has come to mean a
              unique blend of style, music and fashion especially in West
              Africa. Like BOJ said in his 2014 song Paper “say the ladies they
              like me cuz I’m an alté guy”...
            </p>
          </div>
          <img
            className={styles.homeGridImg1}
            src="../../images/Alte-101.webp"
            alt="Alte 101"
          />
          <ReadMore to="music/alte101" />
        </div>
      </div>

      <Editor />
      <div className={styles.homeMainGrid}>
        <div className={styles.homeMainGrid1}>
          <SmallTitle title="lifestyle" bgColor="#003dff" />
          <Link to="lifestyle/mythorfacts">
            <p>Myth Or Facts The Influence Of Drugs In Creativity.</p>
          </Link>
        </div>
        <div className={styles.homeMainGrid2}>
          <div className={styles.homeMainGrid2First}>
            <div className={styles.homeMainGrid2FirstFlex}>
              <div>
                <img
                  src="../../images/cover-art.webp"
                  alt=""
                  className={styles.homeMainGrid2FirstFlexImg}
                />
              </div>
              <div className={styles.homeMainGrid2FirstFlex2}>
                <SmallTitle title="Art" styled="-1.2rem" to="art" />
                <Link to="art/coverarts">
                  <p>THE POWER OF COVER ARTS</p>
                </Link>
                <ByOwn />
              </div>
              <div className={styles.righticon}>
                <Link to="art/coverarts">
                  <FaArrowRightLong size={"3rem"} />
                </Link>
              </div>
            </div>
            <div className={styles.homeMainGrid2FirstFlex}>
              <div>
                <img
                  src="../../images/Alte-101-2.jpg"
                  alt=""
                  className={styles.homeMainGrid2FirstFlexImg}
                />
              </div>
              <div className={styles.homeMainGrid2FirstFlex2}>
                <SmallTitle title="Music" styled="-1.2rem" to="music" />
                <Link to="music/alte101">
                  <p>ALTE'S 101</p>
                </Link>
                <ByOwn />
              </div>
              <div className={styles.righticon}>
                <Link to="music/alte101">
                  <FaArrowRightLong size={"3rem"} />
                </Link>
              </div>
            </div>{" "}
          </div>
          <div className={styles.homeMainGrid2Second}>
            <SmallTitle title="Film" bgColor="#003dff" to="film" />
            <Link to="film/cinematic1">
              <p>
                CINEMATIC MISFITS: DUMB DADS AND THEIR LINGERING EFFECTS ON REAL
                LIFE FAMILIES
              </p>
            </Link>
            <ByOwn />
          </div>
        </div>
      </div>

      <Editor />

      <Carousel />

      <Editor />

      <div className={styles.homeAsideGrid}>
        <div className={`${styles.homeAsideGrid1} ${styles.asideGridBorder1}`}>
          <div className={styles.homeAsideGridFlex}>
            <SmallTitle title="Art" to="art" color="#000" styled="-3rem" />
            <Link to="art/convowithadeart">
              <span className={styles.homeAsideGridFlexSpan}>
                TheOWNMag in Conversation with ADEARTS
              </span>
            </Link>
            <ByOwn styled="-1.8rem" />
          </div>
          <div className={styles.homeAsideGridFlex1}>
            <div className={styles.rightArrowUp}>
              <Link to="art/convowithadeart">
                <BsArrowUpRight size={"4.5rem"} color="currentColor" />
              </Link>
            </div>
            <img src="../../images/meetOwn.jpg" alt="" />
          </div>
        </div>
        <div className={styles.homeAsideGrid1}>
          <div className={styles.homeAsideGridFlex}>
            <SmallTitle title="music" to="music" color="#000" styled="-3rem" />
            <Link to="music/streetmij">
              <span className={styles.homeAsideGridFlexSpan}>
                Street music isn't just for the streets
              </span>
            </Link>
            <ByOwn styled="-1.8rem" />
          </div>
          <div className={styles.homeAsideGridFlex1}>
            <div className={styles.rightArrowUp}>
              <Link to="music/streetmij">
                <BsArrowUpRight size={"4.5rem"} color="currentColor" />
              </Link>
            </div>
            <img src="../../images/STREET.webp" alt="" />
          </div>
        </div>
        <div className={styles.homeAsideGrid1}>
          <div className={styles.homeAsideGridFlex}>
            <SmallTitle title="Music" to="music" color="#000" styled="-3rem" />
            <Link to="music/rapisntdead">
              <span className={styles.homeAsideGridFlexSpan}>
                Rap isn't dead
              </span>
            </Link>
            <ByOwn styled="-1.8rem" />
          </div>
          <div className={styles.homeAsideGridFlex1}>
            <div className={styles.rightArrowUp}>
              <Link to="music/rapisntdead">
                <BsArrowUpRight size={"4.5rem"} color="currentColor" />
              </Link>
            </div>
            <img src="../../images/RapIsntDead.webp" alt="" />
          </div>
        </div>
        <div className={`${styles.homeAsideGrid1} ${styles.asideGridBorder2}`}>
          <div className={styles.homeAsideGridFlex}>
            <SmallTitle title="Books" to="books" color="#000" styled="-3rem" />
            <Link to="books/booksyoushouldread">
              <span className={styles.homeAsideGridFlexSpan}>
                Books You Should Read
              </span>
            </Link>
            <ByOwn styled="-1.8rem" />
          </div>
          <div className={styles.homeAsideGridFlex1}>
            <div className={styles.rightArrowUp}>
              <Link to="books/booksyoushouldread">
                <BsArrowUpRight size={"4.5rem"} color="currentColor" />
              </Link>
            </div>
            <img src="../../images/books.webp" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.homeArticle}>
        <p className={styles.p}>Top Picks</p>
        <div className={styles.homeArticleGrid}>
          <div className={styles.homeArticleFirstGrid}>
            <div>
              <SmallTitle title="Lifestyle" bgColor="#003dff" to="lifestyle" />
              <Link to="music/wickedart">
                <p>Wicked Art - The Devil Plays a Bass</p>
              </Link>
              <ByOwn />
            </div>
            <img src="../../images/Devil-plays-a-bass.jpg" alt="lifestyle" />
          </div>
          <div className={styles.homeArticleSecondGrid}>
            <SmallTitle
              title="Film"
              bgColor="#003dff"
              pad={".3rem .7rem"}
              to="film"
            />
            <img src="../../images/DumbsDad.webp" alt="" />
            <div className={styles.homeArticleSecondGridInner}>
              <Link to="film/cinematic1">
                <h3>
                  CINEMATIC MISFITS: DUMB DADS AND THEIR LINGERING EFFECTS ON
                  REAL LIFE FAMILIES
                </h3>
              </Link>
              <ByOwn />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeFinalGrid}>
        <div>
          <div>
            <Editor />
          </div>
          <div className={styles.homeFinalGrid1}>
            <div>
              <SmallTitle
                title="Music"
                bgColor="#003dff"
                pad={".3rem .7rem"}
                to="music"
              />
              <img src="../../images/RapIsntDead.webp" alt="music" />
              <div className={styles.up}>
                <Link to="music/rapisntdead">
                  <h4>Rap isn't dead</h4>
                </Link>
                <ByOwn />
              </div>
            </div>
            <div>
              <SmallTitle
                title="Lifestyle"
                bgColor="#003dff"
                pad={".3rem .7rem"}
                to="lifestyle"
              />
              <img src="../../images/gifted-kid.webp" alt="styles" />
              <div className={styles.up}>
                <Link to="lifestyle/gk">
                  <h4>Gifted Kids Burnout</h4>
                </Link>
                <ByOwn />
              </div>
            </div>
            <div>
              <SmallTitle
                title="Film"
                bgColor="#003dff"
                pad={".3rem .7rem"}
                to="film"
              />
              <img src="../../images/animation.webp" alt="film" />
              <div className={styles.up}>
                <Link to="film/cinematic2">
                  <h4>
                    film Cinematic Misfits : The Rise Of Nigerian Animation
                  </h4>
                </Link>
                <ByOwn />
              </div>
            </div>
            <div>
              <SmallTitle
                title="Music"
                bgColor="#003dff"
                pad={".3rem .7rem"}
                to="music"
              />
              <img src="../../images/Sound-man.webp" alt="music" />
              <div className={styles.up}>
                <Link to="music/soundman">
                  <h4>Sound-Man Sound's Genius</h4>
                </Link>
                <ByOwn />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeFinalGrid2}>
          <Advert />
        </div>
      </div>
    </>
  );
}

export default Home;

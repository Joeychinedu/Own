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

function Home() {
  return (
    <>
      {/* <div className={styles.homeCover}>
        <img src="../../images/hero.jpg" alt="hero" />
      </div>

      <div className={styles.homeHeader}>
        <SmallTitle title="music" bgColor="#003dff" />
        <h1 className={styles.homeSubTitle}>Rap Isn't Dead</h1>
        <ByOwn />
      </div> */}
      <CoverHeader
        image="hero.jpg"
        title="Music"
        alt="music"
        content="Rap Isn't Dead"
      />
      <div className={styles.homeGrid}>
        <div>
          <SmallTitle title="lifestyle" bgColor="none" styled="-1rem" />
          <div>
            <h3 className={styles.homeSubHead1}>
              <Link to="">Gifted kid burnout</Link>
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
            src="../../images/45.jpg"
            alt="Gifted kid"
          />
          <ReadMore to="lifestyle" />
        </div>
        <div>
          <SmallTitle title="Film" bgColor="none" styled="-1rem" />
          <div>
            <h3 className={styles.homeSubHead1}>
              <Link to="film">
                Cinematic Misfits : The Rise Of Nigerian Animation
              </Link>
            </h3>
            <p className={styles.headPost}>
              Netflix’s acquisition of the first Nigerian...
            </p>
          </div>
          <img
            className={styles.homeGridImg1}
            src="../../images/12.jpg"
            alt="Gifted kid"
          />
          <ReadMore to="film" />
        </div>
        <div>
          <SmallTitle title="Art" bgColor="none" styled="-1rem" />
          <div>
            <h3 className={styles.homeSubHead1}>
              <Link to="art">Alte 101</Link>
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
            src="../../images/x18.jpg"
            alt="Gifted kid"
          />
          <ReadMore to="art" />
        </div>
      </div>

      <Editor />
      <div className={styles.homeMainGrid}>
        <div className={styles.homeMainGrid1}>
          <SmallTitle title="Lifestyle" bgColor="#003dff" />
          <p>Myth Or Facts The Influence Of Drugs In Creativity.</p>
        </div>
        <div className={styles.homeMainGrid2}>
          <div className={styles.homeMainGrid2First}>
            <div className={styles.homeMainGrid2FirstFlex}>
              <div>
                <img
                  src="../../images/cover-art.jpg"
                  alt=""
                  className={styles.homeMainGrid2FirstFlexImg}
                />
              </div>
              <div className={styles.homeMainGrid2FirstFlex2}>
                <SmallTitle title="Art" styled="-1.2rem" />
                <p>THE POWER OF COVER ARTS</p>
                <ByOwn />
              </div>
              <div className={styles.righticon}>
                <Link to="art">
                  <FaArrowRightLong size={"3rem"} />
                </Link>
              </div>
            </div>
            <div className={styles.homeMainGrid2FirstFlex}>
              <div>
                <img
                  src="../../images/x41.jpg"
                  alt=""
                  className={styles.homeMainGrid2FirstFlexImg}
                />
              </div>
              <div className={styles.homeMainGrid2FirstFlex2}>
                <SmallTitle title="Music" styled="-1.2rem" />
                <p>ALTE'S FUNERAL</p>
                <ByOwn />
              </div>
              <div className={styles.righticon}>
                <Link to="music">
                  <FaArrowRightLong size={"3rem"} />
                </Link>
              </div>
            </div>{" "}
          </div>
          <div className={styles.homeMainGrid2Second}>
            <SmallTitle title="Film" bgColor="#003dff" />
            <p>
              CINEMATIC MISFITS: DUMB DADS AND THEIR LINGERING EFFECTS ON REAL
              LIFE FAMILIES
            </p>
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
            <SmallTitle title="Music" to="music" color="#000" styled="-3rem" />
            <Link to="music">
              <span className={styles.homeAsideGridFlexSpan}>
                Street Music Isn't Just For The Streets
              </span>
            </Link>
            <ByOwn styled="-1.8rem" />
          </div>
          <div className={styles.homeAsideGridFlex1}>
            <div className={styles.rightArrowUp}>
              <Link to="music">
                <BsArrowUpRight size={"4.5rem"} color="currentColor" />
              </Link>
            </div>
            <img src="../../images/28.jpg" alt="" />
          </div>
        </div>
        <div className={styles.homeAsideGrid1}>
          <div className={styles.homeAsideGridFlex}>
            <SmallTitle title="Film" to="film" color="#000" styled="-3rem" />
            <Link to="music">
              <span className={styles.homeAsideGridFlexSpan}>
                Nigeria's Need For Originality And Audience Gripping Stories
              </span>
            </Link>
            <ByOwn styled="-1.8rem" />
          </div>
          <div className={styles.homeAsideGridFlex1}>
            <div className={styles.rightArrowUp}>
              <Link to="film">
                <BsArrowUpRight size={"4.5rem"} color="currentColor" />
              </Link>
            </div>
            <img src="../../images/11.jpg" alt="" />
          </div>
        </div>
        <div className={styles.homeAsideGrid1}>
          <div className={styles.homeAsideGridFlex}>
            <SmallTitle
              title="Lifestyle"
              to="lifestyle"
              color="#000"
              styled="-3rem"
            />
            <Link to="lifestyle">
              <span className={styles.homeAsideGridFlexSpan}>
                Gifted Kid Burnout
              </span>
            </Link>
            <ByOwn styled="-1.8rem" />
          </div>
          <div className={styles.homeAsideGridFlex1}>
            <div className={styles.rightArrowUp}>
              <Link to="lifestyle">
                <BsArrowUpRight size={"4.5rem"} color="currentColor" />
              </Link>
            </div>
            <img src="../../images/2.jpg" alt="" />
          </div>
        </div>
        <div className={`${styles.homeAsideGrid1} ${styles.asideGridBorder2}`}>
          <div className={styles.homeAsideGridFlex}>
            <SmallTitle title="Art" to="art" color="#000" styled="-3rem" />
            <Link to="art">
              <span className={styles.homeAsideGridFlexSpan}>
                The Power Of Cover Arts.
              </span>
            </Link>
            <ByOwn styled="-1.8rem" />
          </div>
          <div className={styles.homeAsideGridFlex1}>
            <div className={styles.rightArrowUp}>
              <Link to="art">
                <BsArrowUpRight size={"4.5rem"} color="currentColor" />
              </Link>
            </div>
            <img src="../../images/33.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.homeArticle}>
        <p className={styles.p}>Top Picks</p>
        <div className={styles.homeArticleGrid}>
          <div className={styles.homeArticleFirstGrid}>
            <div>
              <SmallTitle title="Lifestyle" bgColor="#003dff" />
              <p>Myth Of Facts The Influence Of Drugs Of Creativity</p>
              <ByOwn />
            </div>
            <img src="../../images/x41.jpg" alt="lifestyle" />
          </div>
          <div className={styles.homeArticleSecondGrid}>
            <SmallTitle title="Music" bgColor="#003dff" pad={".3rem .7rem"} />
            <img src="../../images/51.jpg" alt="" />
            <h3>Alte 101</h3>
            <ByOwn />
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
              <SmallTitle title="Music" bgColor="#003dff" pad={".3rem .7rem"} />
              <img src="../../images/hero.jpg" alt="music" />
              <div className={styles.up}>
                <h4>Rap isn't dead</h4>
                <ByOwn />
              </div>
            </div>
            <div>
              <SmallTitle
                title="Lifestyle"
                bgColor="#003dff"
                pad={".3rem .7rem"}
              />
              <img src="../../images/45.jpg" alt="styles" />
              <div className={styles.up}>
                <h4>Gifted Kids Burnout</h4>
                <ByOwn />
              </div>
            </div>
            <div>
              <SmallTitle title="Film" bgColor="#003dff" pad={".3rem .7rem"} />
              <img src="../../images/12.jpg" alt="film" />
              <div className={styles.up}>
                <h4>film Cinematic Misfits : The Rise Of Nigerian Animation</h4>
                <ByOwn />
              </div>
            </div>
            <div>
              <SmallTitle title="Music" bgColor="#003dff" pad={".3rem .7rem"} />
              <img src="../../images/x18.jpg" alt="music" />
              <div className={styles.up}>
                <h4>Alte 101</h4>
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

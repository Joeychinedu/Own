import { useEffect } from "react";
import CoverHeader from "../../components/CoverHeader";
import Preview from "../../components/Preview";
import { useCategories } from "../../features/tools/useCategories";
import { useLifestyles } from "../../features/tools/useLifestyle";
import Spinner from "../../ui/Spinner";

function Music() {
  const { isLoading: isLoadingCategories, category } = useCategories();
  const { isLoading: isLoadingStyles, posts } = useLifestyles();

  // console.log(category);

  const matchCategory = category?.filter((el) => el.id === 2);

  const matchCategoryItems = posts?.filter((el) => el.CategoryId === 2);

  const DisplayCategory = matchCategory?.filter((el) => el.name === "Music");
  // const DisplayCategoryItem = matchCategoryItems?.filter(
  //   (el) => el.title === "Gifted kids burnout"
  // );
  const metadata = {
    title: "OWNMag | Music",
    description: `${DisplayCategory?.at(0).description}`,
    imageUrl: `${DisplayCategory?.at(0).coverImage}`,
  };

  useEffect(() => {
    document.title = metadata.title; // Set document title
    document
      .querySelector('link[rel="canonical"]')
      .setAttribute("href", window.location.href);

    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", metadata.description); // Update description meta tag
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", metadata.title); // Update og:title meta tag
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", metadata.description); // Update og:description meta tag
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute("content", metadata.imageUrl); // Update og:image meta tag
    document
      .querySelector('meta[property="og:url"]')
      .setAttribute("content", window.location.href); // Update og:url meta tag
    document
      .querySelector('meta[name="twitter:title"]')
      .setAttribute("content", metadata.title); // Update twitter:title meta tag
    document
      .querySelector('meta[name="twitter:description"]')
      .setAttribute("content", metadata.description); // Update twitter:description meta tag
    document
      .querySelector('meta[name="twitter:image"]')
      .setAttribute("content", metadata.imageUrl); // Update twitter:image meta tag
    document
      .querySelector('meta[name="twitter:url"]')
      .setAttribute("content", window.location.href); // Update twitter:url meta tag
  }, [metadata.description, metadata.title, metadata.imageUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isLoadingStyles ? (
    <Spinner />
  ) : (
    <div>
      {/* <MetaComponent meta={metadata} /> */}
      <CoverHeader
        image={DisplayCategory?.at(0).coverImage}
        title={DisplayCategory?.at(0).name}
        alt={DisplayCategory?.at(0).name}
        content={DisplayCategory?.at(0).description}
      />
      {/* <div>
          <Content
            related={matchCategoryItems}
            category="Music"
            image={DisplayCategoryItem?.at(0).image}
          >
            {DisplayCategoryItem?.at(0).content}
          </Content>
        </div> */}
      <Preview
        content={matchCategoryItems}
        category={DisplayCategory?.at(0).name}
      />
    </div>
  );
}

export default Music;

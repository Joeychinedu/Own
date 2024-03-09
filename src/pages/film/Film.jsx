import { useEffect } from "react";
import Content from "../../components/Content";
import CoverHeader from "../../components/CoverHeader";
import Preview from "../../components/Preview";
import { useCategories } from "../../features/tools/useCategories";
import { useLifestyles } from "../../features/tools/useLifestyle";
import Spinner from "../../ui/Spinner";

function Film() {
  const { isLoading: isLoadingCategories, category } = useCategories();
  const { isLoading: isLoadingStyles, posts } = useLifestyles();

  // console.log(category);

  const matchCategory = category?.filter((el) => el.id === 3);

  const matchCategoryItems = posts?.filter((el) => el.CategoryId === 3);

  const DisplayCategory = matchCategory?.filter((el) => el.name === "Film");
  // const DisplayCategoryItem = matchCategoryItems?.filter(
  //   (el) => el.title === "Gifted kids burnout"
  // );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isLoadingStyles ? (
    <Spinner />
  ) : (
    <div>
      <CoverHeader
        image={DisplayCategory?.at(0).coverImage}
        title={DisplayCategory?.at(0).name}
        alt={DisplayCategory?.at(0).name}
        content={DisplayCategory?.at(0).description}
      />
      {/* <div>
          <Content
            related={matchCategoryItems}
            category="Film"
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

export default Film;

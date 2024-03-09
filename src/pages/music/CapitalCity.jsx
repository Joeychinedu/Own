import { useEffect } from "react";
import Content from "../../components/Content";
import CoverHeader from "../../components/CoverHeader";
import { useCategories } from "../../features/tools/useCategories";
import { useLifestyles } from "../../features/tools/useLifestyle";
import Spinner from "../../ui/Spinner";

function Alte101() {
  const { isLoading: isLoadingCategories, category } = useCategories();
  const { isLoading: isLoadingStyles, posts } = useLifestyles();

  // console.log(category);

  const matchCategory = category?.filter((el) => el.id === 2);

  const matchCategoryItems = posts?.filter((el) => el.CategoryId === 2);

  const relatedCategoryItems = posts?.filter(
    (el) =>
      el.CategoryId === 2 && el.title !== "The Capital City: Hip Hop’s New Home"
  );

  const DisplayCategory = matchCategory?.filter((el) => el.name === "Music");
  const DisplayCategoryItem = matchCategoryItems?.filter(
    (el) => el.title === "The Capital City: Hip Hop’s New Home"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log(DisplayCategoryItem);
  return !matchCategoryItems ? (
    <Spinner />
  ) : (
    <div>
      <CoverHeader
        image={DisplayCategoryItem?.at(0).CoverImage}
        title={DisplayCategory?.at(0).name}
        alt={DisplayCategory?.at(0).name}
        content={DisplayCategoryItem?.at(0).title}
      />
      <div>
        <Content
          related={relatedCategoryItems}
          category="Lifestyle"
          image={DisplayCategoryItem?.at(0).CoverImage}
          to={`/${DisplayCategory?.at(0).link}`}
          authorName={DisplayCategoryItem?.at(0).author}
        >
          {DisplayCategoryItem?.at(0).content}
        </Content>
      </div>
    </div>
  );
}

export default Alte101;

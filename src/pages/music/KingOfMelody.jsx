import { useEffect } from "react";
import Content from "../../components/Content";
import CoverHeader from "../../components/CoverHeader";
import { useCategories } from "../../features/tools/useCategories";
import { useLifestyles } from "../../features/tools/useLifestyle";
import Spinner from "../../ui/Spinner";

function KingOfMelody() {
  const { isLoading: isLoadingCategories, category } = useCategories();
  const { isLoading: isLoadingStyles, posts } = useLifestyles();

  // console.log(category);

  const matchCategory = category?.filter((el) => el.id === 2);

  const matchCategoryItems = posts?.filter((el) => el.CategoryId === 2);

  const relatedCategoryItems = posts?.filter(
    (el) =>
      el.CategoryId === 2 &&
      el.title !== "ODUMODUBLVCK: The Supposed New King Of Melodies"
  );

  const DisplayCategory = matchCategory?.filter((el) => el.name === "Music");
  const DisplayCategoryItem = matchCategoryItems?.filter(
    (el) => el.title === "ODUMODUBLVCK: The Supposed New King Of Melodies"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          category={matchCategory?.at(0).name}
          image={DisplayCategoryItem?.at(0).CoverImage}
          to={`/${DisplayCategory?.at(0).link}`}
          authorName={DisplayCategoryItem?.at(0).author}
          authorImage={DisplayCategoryItem?.at(0).authorImage}
        >
          {DisplayCategoryItem?.at(0).content}
        </Content>
      </div>
    </div>
  );
}

export default KingOfMelody;

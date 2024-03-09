import supabase from "../helpers/supabase";

export async function getCategory() {
  let { data: Categories, error } = await supabase
    .from("Categories")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not get categories");
  }

  return Categories;
}

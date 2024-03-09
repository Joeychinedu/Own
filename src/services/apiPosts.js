import supabase from "../helpers/supabase";

export async function getPost() {
  let { data: Posts, error } = await supabase.from("Posts").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not get posts");
  }

  return Posts;
}

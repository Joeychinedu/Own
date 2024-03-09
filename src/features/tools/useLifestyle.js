import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/apiPosts";

export function useLifestyles() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["Posts"],
    queryFn: getPost,
  });

  return { isLoading, error, posts };
}

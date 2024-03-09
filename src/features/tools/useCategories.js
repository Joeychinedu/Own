import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/apiCategories";

export function useCategories() {
  const {
    isLoading,
    error,
    data: category,
  } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  return { isLoading, error, category };
}

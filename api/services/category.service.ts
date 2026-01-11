import api from "@/api/api";

export const getCategoriesApi = async () => {
  const response = await api.get("/categories/list");
  return response.data;
};

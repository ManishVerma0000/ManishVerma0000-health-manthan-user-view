import api from "@/api/api";

export const getCategoriesApi = async () => {
  const response = await api.get("/categories/list");
  return response?.data ?? response;
};

export const getSurgeryListApi = async () => {
  const res = await api.get(`/surgery/list`);
  return res?.data ?? res;
};
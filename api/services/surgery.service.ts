import axios from "axios";
import api from "../api";

// example: https://api.yourdomain.com

export const getSurgeryList = async () => {
  const response = await api.get(`/surgery/list`);
  return response.data;
};

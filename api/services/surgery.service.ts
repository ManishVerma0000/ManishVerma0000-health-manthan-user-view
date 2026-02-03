import axios from "axios";
import api from "../api";

export const getSurgeryList = async () => {
  const response = await api.get(`/surgery/list`);
  return response?.data ?? response;
};

export const getSurgeryById = async (surgeryId: string) => {
  const response = await api.get(`/surgery/${surgeryId}`);
  return response?.data ?? response;
};
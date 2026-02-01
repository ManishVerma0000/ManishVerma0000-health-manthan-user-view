import api from "../api";

export interface ContactUsPayload {
  name: string;
  mobileNumber: string;
  city: string;
}

export const createContactUs = (payload: any) => {
  return api.post("/contact-us", payload);
};

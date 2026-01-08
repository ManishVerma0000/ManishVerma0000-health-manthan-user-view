import api from "../api";

export interface ContactUsPayload {
  name: string;
  mobileNumber: string;
  city: string;
}

export const createContactUs = (payload: ContactUsPayload) => {
  return api.post("/contact-us", payload);
};

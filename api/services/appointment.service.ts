// import api from "@/lib/api";

import api from "../api";

export interface BookAppointmentPayload {
  name: string;
  email: string;
  phone: string;
  date: string;
}

export const bookAppointment = (payload: BookAppointmentPayload) => {
  return api.post("/book-appointment", payload);
};

// import api from "@/lib/api";

import api from "../api";

export interface BookAppointmentPayload {
  name: string;
  service: string;
  phone: string;
  branch: string;
  date: string;
  doctorId?: string | null;
  surgeryId?: string | null;
}

export const bookAppointment = (payload: BookAppointmentPayload) => {
  return api.post("/book-appointment", payload);
};

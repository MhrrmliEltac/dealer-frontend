import { api } from "@/api/api";

export interface ContactPayload {
  location: string;
  email: string;
  phone: string;
}

export type Contact = ContactPayload[];

export const contactService = {
  getContact: async () => {
    const { data } = await api.get<Contact>("/contact/");
    return data;
  },

  createContact: async (payload: ContactPayload) => {
    const { data } = await api.post<Contact>("/contact/", payload);
    return data;
  },
};

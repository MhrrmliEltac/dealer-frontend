import { api } from "@/api/api";

export interface AboutPayload {
  about: string;
  about_desc: string;
  about_image: string;
  mission: string;
  mission_desc: string;
  mission_image: string;
}

export interface About extends AboutPayload {
  id: string;
}

interface AboutResponse {
  about: About;
}

export const aboutService = {
  getAbout: async () => {
    const { data } = await api.get<AboutResponse>("/about/");
    return data.about;
  },

  createAbout: async (payload: AboutPayload) => {
    const { data } = await api.post<About>("/about/create", payload);
    return data;
  },

  deleteAbout: async (aboutId: string) => {
    const { data } = await api.delete(`/about/${aboutId}`);
    return data;
  },
};

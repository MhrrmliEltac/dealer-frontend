import { api } from "@/api/api";

export interface Advantage {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const advantageService = {
  getAdvantage: async () => {
    const { data } = await api.get<Advantage[]>("/advantage/");
    return data;
  },
};

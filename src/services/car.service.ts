import { api } from "@/api/api";

export const carService = {
  getCarByVin: async (vincode: string) => {
    const { data } = await api.get(`/cars/?vincode=${vincode}`);
    return data;
  },
};

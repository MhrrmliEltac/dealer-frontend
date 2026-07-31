import { api } from "@/api/api";

export interface ServicePayload {
  title: string;
  description?: string | null;
  image?: string | null;
}

export interface Service extends ServicePayload {
  id: string;
}

export const serviceService = {
  getServices: async () => {
    const { data } = await api.get<Service[]>("/service/");
    return data;
  },

  createService: async (payload: ServicePayload) => {
    const { data } = await api.post<Service>("/service/create", payload);
    return data;
  },

  deleteService: async (serviceId: string) => {
    const { data } = await api.delete(`/service/${serviceId}`);
    return data;
  },
};

import { api } from "@/api/api";

export interface AuctionPayload {
  title: string;
  image: string;
}

export interface Auction extends AuctionPayload {
  id: number;
}

export const auctionService = {
  getAuctions: async () => {
    const { data } = await api.get<Auction[]>("/auction/");
    return data;
  },

  getAuction: async (auctionId: number) => {
    const { data } = await api.get<Auction>(`/auction/${auctionId}`);
    return data;
  },

  createAuction: async (payload: AuctionPayload) => {
    const { data } = await api.post<Auction>("/auction/", payload);
    return data;
  },

  updateAuction: async (auctionId: number, payload: AuctionPayload) => {
    const { data } = await api.put<Auction>(`/auction/${auctionId}`, payload);
    return data;
  },

  deleteAuction: async (auctionId: number) => {
    const { data } = await api.delete(`/auction/${auctionId}`);
    return data;
  },
};

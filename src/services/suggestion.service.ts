import { api } from "@/api/api";

export interface SuggestionPayload {
  fullname: string;
  phone_number: string;
  suggestion: string;
}

export const suggestionService = {
  createSuggestion: async (payload: SuggestionPayload) => {
    const { data } = await api.post("/suggestion/", payload);
    return data;
  },
};

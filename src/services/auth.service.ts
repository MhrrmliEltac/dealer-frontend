import { api } from "@/api/api";

export interface SignUpPayload {
  fullname: string;
  phone_number: string;
  email: string;
  password: string;
  monthly_volume: number;
  suggestion: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface User {
  email: string;
  fullname: string;
  phone_number: string;
  monthly_volume: number;
  suggestion: string;
}

export const authService = {
  signUp: async (payload: SignUpPayload) => {
    const { data } = await api.post<User>("/auth/sign-up", payload);
    return data;
  },

  signIn: async (payload: SignInPayload) => {
    const { data } = await api.post<User>("/auth/sign-in", payload);
    return data;
  },
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  authService,
  type SignInPayload,
  type SignUpPayload,
} from "@/services/auth.service";
import { toastError } from "@/lib/toast";
import { isAxiosError } from "axios";

export const AUTH_QUERY_KEY = ["auth", "me"] as const;

export const useSignUpMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: SignUpPayload) => authService.signUp(payload),
    onSuccess: (data) => {
      queryClient.setQueryData(AUTH_QUERY_KEY, data);
    },
    onError: (error) => {
      toastError(error);
    },
  });
};

export const useSignInMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: SignInPayload) => authService.signIn(payload),
    onSuccess: (data) => {
      queryClient.setQueryData(AUTH_QUERY_KEY, data);
    },
    onError: (error) => {
      if(isAxiosError(error)) console.log(error.response)
      toastError(error);
    },
  });
};

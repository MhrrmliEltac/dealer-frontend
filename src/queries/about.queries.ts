import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { aboutService, type AboutPayload } from "@/services/about.service";

export const ABOUT_QUERY_KEY = ["about"] as const;

export const useAboutQuery = () =>
  useQuery({
    queryKey: ABOUT_QUERY_KEY,
    queryFn: aboutService.getAbout,
  });

export const useCreateAboutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AboutPayload) => aboutService.createAbout(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ABOUT_QUERY_KEY });
    },
  });
};

export const useDeleteAboutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (aboutId: string) => aboutService.deleteAbout(aboutId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ABOUT_QUERY_KEY });
    },
  });
};

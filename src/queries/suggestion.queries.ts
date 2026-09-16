import { useMutation } from "@tanstack/react-query";
import {
  suggestionService,
  type SuggestionPayload,
} from "@/services/suggestion.service";
import { toastError, toastSuccess } from "@/lib/toast";

export const useCreateSuggestionMutation = () => {
  return useMutation({
    mutationFn: (payload: SuggestionPayload) =>
      suggestionService.createSuggestion(payload),
    onError: (error) => {
      toastError(error);
    },
    onSuccess: () => {
      toastSuccess("Suggestion submitted successfully");
      return true;
    },
  });
};

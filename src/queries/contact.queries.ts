import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { contactService, type ContactPayload } from "@/services/contact.service";

export const CONTACT_QUERY_KEY = ["contact"] as const;

export const useContactQuery = () =>
  useQuery({
    queryKey: CONTACT_QUERY_KEY,
    queryFn: contactService.getContact,
  });

export const useCreateContactMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ContactPayload) => contactService.createContact(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CONTACT_QUERY_KEY });
    },
  });
};

export { AUTH_QUERY_KEY, useSignUpMutation, useSignInMutation } from "./auth.queries";

export {
  AUCTION_QUERY_KEY,
  auctionDetailQueryKey,
  useAuctionsQuery,
  useAuctionQuery,
  useCreateAuctionMutation,
  useUpdateAuctionMutation,
  useDeleteAuctionMutation,
} from "./auction.queries";

export {
  SERVICE_QUERY_KEY,
  useServicesQuery,
  useCreateServiceMutation,
  useDeleteServiceMutation,
} from "./service.queries";

export {
  CONTACT_QUERY_KEY,
  useContactQuery,
  useCreateContactMutation,
} from "./contact.queries";

export {
  ABOUT_QUERY_KEY,
  useAboutQuery,
  useCreateAboutMutation,
  useDeleteAboutMutation,
} from "./about.queries";

export { useCreateSuggestionMutation } from "./suggestion.queries";

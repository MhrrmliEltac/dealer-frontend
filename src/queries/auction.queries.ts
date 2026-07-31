import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { auctionService, type AuctionPayload } from "@/services/auction.service";

export const AUCTION_QUERY_KEY = ["auctions"] as const;
export const auctionDetailQueryKey = (auctionId: number) =>
  [...AUCTION_QUERY_KEY, auctionId] as const;

export const useAuctionsQuery = () =>
  useQuery({
    queryKey: AUCTION_QUERY_KEY,
    queryFn: auctionService.getAuctions,
  });

export const useAuctionQuery = (auctionId: number) =>
  useQuery({
    queryKey: auctionDetailQueryKey(auctionId),
    queryFn: () => auctionService.getAuction(auctionId),
    enabled: !!auctionId,
  });

export const useCreateAuctionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AuctionPayload) => auctionService.createAuction(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUCTION_QUERY_KEY });
    },
  });
};

export const useUpdateAuctionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      auctionId,
      payload,
    }: {
      auctionId: number;
      payload: AuctionPayload;
    }) => auctionService.updateAuction(auctionId, payload),
    onSuccess: (_data, { auctionId }) => {
      queryClient.invalidateQueries({ queryKey: AUCTION_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: auctionDetailQueryKey(auctionId) });
    },
  });
};

export const useDeleteAuctionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (auctionId: number) => auctionService.deleteAuction(auctionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUCTION_QUERY_KEY });
    },
  });
};

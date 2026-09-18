import { advantageService } from "@/services/advantage.service";
import { useQuery } from "@tanstack/react-query";

export const ADVANTAGE_QUERY_KEY = ["advantage"] as const;

export const useAdvantageQuery = () =>
  useQuery({
    queryKey: ADVANTAGE_QUERY_KEY,
    queryFn: advantageService.getAdvantage,
  });

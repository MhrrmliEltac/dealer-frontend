import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { serviceService, type ServicePayload } from "@/services/service.service";

export const SERVICE_QUERY_KEY = ["services"] as const;

export const useServicesQuery = () =>
  useQuery({
    queryKey: SERVICE_QUERY_KEY,
    queryFn: serviceService.getServices,
  });

export const useCreateServiceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ServicePayload) => serviceService.createService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SERVICE_QUERY_KEY });
    },
  });
};

export const useDeleteServiceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (serviceId: string) => serviceService.deleteService(serviceId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SERVICE_QUERY_KEY });
    },
  });
};

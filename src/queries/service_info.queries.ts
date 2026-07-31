import {useQuery} from "@tanstack/react-query";
import {ServiceInfoService} from "@/services/service_info.service.ts";

export const Service_Info_QUERY_KEY = ["service_info"] as const;

export const useServiceInfoQuery = () => (
    useQuery({
        queryKey: Service_Info_QUERY_KEY,
        queryFn: ServiceInfoService.getServiceInfo
    })
)
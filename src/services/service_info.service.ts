import {api} from "@/api/api.ts";

export interface ServiceInfo {
    id: string
    title: string
    description: string
    tags: string[]
    image: string
}

export const ServiceInfoService = {
    getServiceInfo: async () => {
        const {data} = await api.get<ServiceInfo[]>("/info/")
        return data
    }
}
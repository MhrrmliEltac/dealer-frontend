import {useServiceInfoQuery} from "@/queries/service_info.queries.ts";
import type {ServiceInfo} from "@/services/service_info.service.ts";
import {Button} from "@/components/ui/button.tsx";
import {API_BASE_URL} from "@/api/api.ts";

const ServicesSection = () => {
    const {data: ServiceInfoData} = useServiceInfoQuery()

    return (
        <section className="mb-20.75 py-16.5 px-12.25 bg-white">
            <div className="max-w-360 mx-auto">
                <div className="flex flex-col gap-6.5">
                    {
                        ServiceInfoData?.map((serviceInfo: ServiceInfo) => (
                            <div key={serviceInfo.id}
                                 className="h-77.5 rounded-[20px] bg-black text-white flex justify-between overflow-hidden">

                                <div className="flex flex-col justify-between h-full py-11.25 pl-[62.47px] shrink-0">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-[30px] text-white font-bold leading-[100%]">{serviceInfo.title}</h4>
                                        <p className="text-[25px] text-[#B9B9B9] font-normal leading-[100%] text-wrap max-w-[600px]">{serviceInfo.description}</p>
                                    </div>

                                    <div className="flex gap-2.75">
                                        {
                                            serviceInfo.tags.map(tag => (
                                                <Button
                                                    key={tag}
                                                    className="bg-[#FF6200] rounded-[12px] h-9.5 flex justify-center items-center max-w-25.5">{tag}</Button>
                                            ))
                                        }
                                    </div>
                                </div>

                                <img
                                    src={`${API_BASE_URL}${serviceInfo.image}`}
                                    alt={serviceInfo.title}
                                    className="h-full w-[45%] object-cover"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

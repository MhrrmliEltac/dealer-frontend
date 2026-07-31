import {useServiceInfoQuery} from "@/queries/service_info.queries.ts";
import type {ServiceInfo} from "@/services/service_info.service.ts";
import {Button} from "@/components/ui/button.tsx";
import {API_BASE_URL} from "@/api/api.ts";

const ServicesSection = () => {
    const {data: ServiceInfoData} = useServiceInfoQuery()

    return (
        <section className="mb-10 sm:mb-16 md:mb-20.75 py-8 sm:py-12 md:py-16.5 px-4 sm:px-8 md:px-12.25 bg-white">
            <div className="max-w-360 mx-auto">
                <div className="flex flex-col gap-4 sm:gap-6.5">
                    {
                        ServiceInfoData?.map((serviceInfo: ServiceInfo) => (
                            <div key={serviceInfo.id}
                                 className="rounded-[20px] bg-black text-white flex flex-col md:flex-row md:h-77.5 justify-between overflow-hidden">

                                <div className="flex flex-col justify-between gap-6 py-6 px-5 sm:py-8 sm:px-8 md:h-full md:py-11.25 md:pl-[62.47px] md:pr-8 shrink-0">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-lg sm:text-2xl md:text-[30px] text-white font-bold leading-[100%]">{serviceInfo.title}</h4>
                                        <p className="text-sm sm:text-lg md:text-[25px] text-[#B9B9B9] font-normal leading-[130%] md:leading-[100%] text-wrap max-w-150">{serviceInfo.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 sm:gap-2.75">
                                        {
                                            serviceInfo.tags.map(tag => (
                                                <Button
                                                    key={tag}
                                                    className="bg-[#FF6200] rounded-[12px] h-8 sm:h-9.5 px-3 flex justify-center items-center max-w-full sm:max-w-25.5">{tag}</Button>
                                            ))
                                        }
                                    </div>
                                </div>

                                <img
                                    src={`${API_BASE_URL}${serviceInfo.image}`}
                                    alt={serviceInfo.title}
                                    className="h-48 sm:h-64 w-full md:h-full md:w-[45%] object-cover"
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

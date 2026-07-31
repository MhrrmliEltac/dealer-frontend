import {API_BASE_URL} from "@/api/api";
import {useAuctionsQuery} from "@/queries";

const AuctionSection = () => {
    const {data} = useAuctionsQuery()

    return (
        <section className="mb-10 sm:mb-16 md:mb-20.75 px-4 sm:px-8 md:px-13 mt-12 sm:mt-16 md:mt-25.25 max-w-360 mx-auto">
            <div className="flex flex-col items-center text-center gap-1.5 mb-8 sm:mb-12 md:mb-15.5">
                <h1 className="text-[#FF6200] text-3xl sm:text-5xl md:text-[60px] font-bold">BİZİM AUKSİON</h1>
                <p className="text-white text-base sm:text-xl md:text-[30px] font-normal">
                    Dünyanın ən məşhur onlayn mağazalarından sifariş edin, biz çatdıraq.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5.25 mb-16 sm:mb-28 md:mb-40.25">
                {data?.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-center w-40 sm:w-56 md:max-w-74 h-24 sm:h-36 md:h-45.5 rounded-[20px] px-6 sm:px-10 md:px-16.5 bg-white">
                        <img src={`${API_BASE_URL}${item.image}`} alt={item.title} width={164} height={57} className="h-auto max-w-full"/>
                    </div>
                ))}
            </div>

            <h1 className="text-center text-2xl sm:text-4xl md:text-[60px] font-bold text-[#FF6200] leading-tight md:leading-[100%] mb-8 sm:mb-12 md:mb-19">DÜNYANIN 8
                ÖLKƏSİNƏ <br/> AVTOMOBİL ÇATDIRLIMASI</h1>

            <div className="mb-12 sm:mb-16 md:mb-26.5">
                <img src="/MAP.png" alt="car_map" className="w-full h-auto"/>
            </div>

        </section>
    );
};

export default AuctionSection;

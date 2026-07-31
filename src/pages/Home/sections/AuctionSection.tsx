import {API_BASE_URL} from "@/api/api";
import {useAuctionsQuery} from "@/queries";

const AuctionSection = () => {
    const {data} = useAuctionsQuery()

    return (
        <section className="mb-20.75 px-13 mt-25.25 max-w-360 mx-auto">
            <div className="flex flex-col items-center gap-1.5 mb-15.5">
                <h1 className="text-[#FF6200] text-[60px] font-bold">BİZİM AUKSİON</h1>
                <p className="text-white text-[30px] font-normal">
                    Dünyanın ən məşhur onlayn mağazalarından sifariş edin, biz çatdıraq.
                </p>
            </div>

            <div className="flex items-center gap-5.25 mb-40.25">
                {data?.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-center max-w-74 h-45.5 mx-auto rounded-[20px] px-16.5 bg-white">
                        <img src={`${API_BASE_URL}${item.image}`} alt={item.title} width={164} height={57}/>
                    </div>
                ))}
            </div>

            <h1 className="text-center text-[60px] font-bold text-[#FF6200] leading-[100%] mb-19">DÜNYANIN 8
                ÖLKƏSİNƏ <br/> AVTOMOBİL ÇATDIRLIMASI</h1>

            <div className="mb-26.5">
                <img src="/MAP.png" alt="car_map"/>
            </div>

        </section>
    );
};

export default AuctionSection;

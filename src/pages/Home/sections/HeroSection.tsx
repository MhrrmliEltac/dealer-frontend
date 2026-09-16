import { Button } from "@/components/ui/button";
import { modalStore } from "@/lib/modal-store";
import { Link } from "react-router";

const HeroSection = () => {
  const handleTrackingClick = () => {
    modalStore.setOpen(true);
  };

  return (
    <section className="flex justify-center items-center w-full mb-20">
      <div className="relative w-full max-w-360 mx-auto">
        <img
          src="/main_image.jpg"
          alt="Cargo Auto Import"
          className="w-full h-auto object-contain rotate-y-180"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start gap-2 sm:gap-4 md:gap-5 lg:gap-6 pl-3 sm:pl-8 md:pl-14 lg:pl-20 pr-3 max-w-[90%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[70%]">
          <div className="flex flex-wrap gap-1.5 sm:gap-3">
            <div className="bg-[#FF6200] rounded-[10px] flex items-center px-2 sm:px-4 md:px-6 h-5 sm:h-10 md:h-14.25">
              <Link to="/calculation">
                <span className="text-white font-bold text-[8px] sm:text-sm md:text-[30px]">
                  Calculation
                </span>
              </Link>
            </div>
            <Button
              className="bg-[#FF6200] rounded-[10px] flex items-center px-2 sm:px-4 md:px-6 h-5 sm:h-10 md:h-14.25"
              onClick={handleTrackingClick}
            >
              <span className="text-white font-bold text-[8px] sm:text-sm md:text-[30px]">
                Tracking
              </span>
            </Button>
          </div>
          <h1 className="text-white font-[1000] uppercase leading-none tracking-normal text-sm sm:text-2xl md:text-5xl lg:text-[60px]">
            18+ İllik Logistika
            <br />
            Təcrübəsi
          </h1>
          <p className="text-[#C9C9C9] font-normal leading-none tracking-normal text-[8px] sm:text-xs md:text-lg lg:text-[30px]">
            İllərin təcrübəsini bölüşən şirkət. <br /> 2 milyon avtomobil
            idxalı.
          </p>
          <div className="flex items-center gap-1 sm:gap-3 border border-white/30 rounded-lg px-2 py-1 sm:px-4 sm:py-2.5">
            <img
              src="/manheim_logo.png"
              alt="Manheim"
              className="h-3 sm:h-6 md:h-8 w-auto object-contain"
            />
            <span className="text-[#FF6200] text-xs sm:text-xl md:text-2xl font-light">
              /
            </span>
            <span className="text-white font-bold text-[6px] sm:text-[10px] md:text-sm leading-tight">
              RƏSMİ
              <br />
              BROKER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center w-full mb-20">
      <div className="relative w-full max-w-360 mx-auto">
        <img
          src="/advantage-hero.png"
          alt="Cargo Auto Import"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start gap-2 sm:gap-4 md:gap-5 lg:gap-6 pl-3 sm:pl-8 md:pl-14 lg:pl-20 pr-3 max-w-[90%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[70%]">
          <h1 className="text-white font-[1000] uppercase leading-none tracking-normal text-sm sm:text-2xl md:text-5xl lg:text-[60px]">
            ÜSTÜNLÜKLƏRİMİZ
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

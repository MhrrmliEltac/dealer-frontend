import { useAboutQuery } from "@/queries";
import { API_BASE_URL } from "@/api/api";

const AboutSection = () => {
  const { data: about, isLoading, error } = useAboutQuery();

  if (isLoading || error || !about) {
    return null;
  }

  return (
    <section className="bg-white mt-13 mb-20.75 px-13 py-16">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-gray-500 text-lg">Biz kimik?</span>
            <h2 className="text-[#FF6200] font-extrabold text-4xl lg:text-5xl uppercase mt-1 mb-5">
              Haqqımızda
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              {about.about_desc}
            </p>
          </div>
          <img
            src={`${API_BASE_URL}${about.about_image}`}
            alt="Haqqımızda"
            className="w-full h-64 lg:h-80 object-cover rounded-2xl"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center mt-20">
          <h2 className="text-[#FF6200] font-extrabold text-3xl lg:text-4xl uppercase mb-5">
            Missiyamız
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            {about.mission_desc}
          </p>
        </div>

        <img
          src={`${API_BASE_URL}${about.mission_image}`}
          alt="Missiyamız"
          className="w-full h-64 lg:h-96 object-cover rounded-2xl mt-10"
        />
      </div>
    </section>
  );
};

export default AboutSection;

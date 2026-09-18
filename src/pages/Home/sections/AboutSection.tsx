import { useAboutQuery } from "@/queries";
import { API_BASE_URL } from "@/api/api";
import { Skeleton } from "@/components/ui/skeleton";

const AboutSection = () => {
  const { data: about, isLoading } = useAboutQuery();

  return (
    <section className="bg-white mt-8 sm:mt-13 mb-10 sm:mb-20.75 px-4 sm:px-8 md:px-13 py-8 sm:py-12 md:py-16">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div>
            <span className="text-gray-500 text-sm sm:text-base md:text-lg">
              Biz kimik?
            </span>

            <h2 className="text-[#FF6200] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase mt-1 mb-3 sm:mb-5">
              Haqqımızda
            </h2>

            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-gray-200" />
                <Skeleton className="h-4 w-[95%] bg-gray-200" />
                <Skeleton className="h-4 w-[90%] bg-gray-200" />
                <Skeleton className="h-4 w-[75%] bg-gray-200" />
              </div>
            ) : (
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                {about?.about_desc}
              </p>
            )}
          </div>

          {isLoading ? (
            <Skeleton className="w-full h-48 sm:h-64 lg:h-80 rounded-2xl bg-gray-200" />
          ) : (
            <img
              src={`${API_BASE_URL}${about?.about_image}`}
              alt="Haqqımızda"
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl"
            />
          )}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-10 sm:mt-16 md:mt-20">
          <h2 className="text-[#FF6200] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase mb-3 sm:mb-5">
            Missiyamız
          </h2>

          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-gray-200" />
              <Skeleton className="h-4 w-[95%] mx-auto bg-gray-200" />
              <Skeleton className="h-4 w-[85%] mx-auto bg-gray-200" />
              <Skeleton className="h-4 w-[65%] mx-auto bg-gray-200" />
            </div>
          ) : (
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              {about?.mission_desc}
            </p>
          )}
        </div>

        {isLoading ? (
          <Skeleton className="w-full h-48 sm:h-64 lg:h-96 rounded-2xl mt-6 sm:mt-10 bg-gray-200" />
        ) : (
          <img
            src={`${API_BASE_URL}${about?.mission_image}`}
            alt="Missiyamız"
            className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-2xl mt-6 sm:mt-10"
          />
        )}
      </div>
    </section>
  );
};

export default AboutSection;

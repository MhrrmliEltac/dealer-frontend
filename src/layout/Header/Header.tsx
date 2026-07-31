import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/auth/login");
  };

  return (
    <header className="border-b border-b-white">
      <section className="flex flex-wrap justify-between items-center gap-4 px-4 sm:px-8 lg:px-16 py-3 lg:py-0 lg:h-29.25 max-w-360 mx-auto">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Menu className="text-white size-5 sm:size-6" />
          <span className="text-white font-semibold text-lg sm:text-2xl lg:text-3xl">
            MENYU
          </span>
        </div>
        <img
          src="/cargo_auto_import.png"
          className="w-16 sm:w-20 lg:w-24 h-auto order-last sm:order-0"
        />
        <Button
          onClick={handleRoute}
          className="bg-[#FF6200] px-4 py-2 sm:px-7.25 sm:pt-2.25 sm:pb-3 rounded-[10px] h-10 sm:h-14.25"
        >
          <span className="font-bold text-base sm:text-2xl lg:text-3xl text-white">
            Dealer Profile
          </span>
        </Button>
      </section>
    </header>
  );
};

export default Header;

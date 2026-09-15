import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { nav, services } from "@/layout/Footer/data";
import { NavLink, useNavigate } from "react-router";

type AppSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const groupLabelClassName = "px-2 text-xs font-medium text-white/50";
const navListClassName = "flex flex-col gap-1";
const linkClassName =
  "rounded-md px-2 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white aria-[current=page]:bg-white/10 aria-[current=page]:text-white";

const AppSidebar = ({ open, onOpenChange }: AppSidebarProps) => {
  const navigate = useNavigate();

  const close = () => onOpenChange(false);

  const handleDealerProfile = () => {
    close();
    navigate("/auth/login");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="flex flex-col gap-6 bg-black text-white"
      >
        <SheetHeader>
          <NavLink to="/" onClick={close} className="flex items-center gap-2">
            <img
              src="/cargo_auto_import.png"
              className="w-14 h-auto"
              alt="Cargo Auto Import"
            />
          </NavLink>
          <SheetTitle className="sr-only">Menyu</SheetTitle>
          <SheetDescription className="sr-only">
            Sayt naviqasiyası
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto px-4">
          <div className="flex flex-col gap-1">
            <span className={groupLabelClassName}>Naviqasiya</span>
            <nav className={navListClassName}>
              <NavLink to="/" end onClick={close} className={linkClassName}>
                Ana səhifə
              </NavLink>
              {nav.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  onClick={close}
                  className={linkClassName}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-1">
            <span className={groupLabelClassName}>Xidmətlər</span>
            <nav className={navListClassName}>
              {services.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  onClick={close}
                  className={linkClassName}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <SheetFooter>
          <Button
            onClick={handleDealerProfile}
            className="bg-[#FF6200] w-full rounded-[10px] h-10"
          >
            <span className="font-bold text-white">Dealer Profile</span>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AppSidebar;

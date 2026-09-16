import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppSidebar from "@/components/ui/app-sidebar";
import Tracking from "../Modal/Tracking";

const MainLayout = () => {
  return (
    <>
      <AppSidebar />
      <main className="bg-black min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </main>
      <Tracking />
    </>
  );
};

export default MainLayout;

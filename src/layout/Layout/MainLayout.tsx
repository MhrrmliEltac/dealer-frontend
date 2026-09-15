import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppSidebar from "@/components/ui/app-sidebar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <AppSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <main className="bg-black min-h-screen">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;

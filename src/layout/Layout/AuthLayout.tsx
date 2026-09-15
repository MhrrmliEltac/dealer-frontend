import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import AppSidebar from "@/components/ui/app-sidebar";

const AuthLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <AppSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <main className="bg-black min-h-screen flex flex-col">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;

import { Outlet } from "react-router";
import Header from "../Header/Header";
import AppSidebar from "@/components/ui/app-sidebar";

const AuthLayout = () => {
  return (
    <>
      <AppSidebar />
      <main className="bg-black min-h-screen flex flex-col">
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;

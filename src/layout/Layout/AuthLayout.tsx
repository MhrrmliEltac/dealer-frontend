import { Outlet } from "react-router";
import Header from "../Header/Header";

const AuthLayout = () => {
  return (
    <main className="bg-black min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </main>
  );
};

export default AuthLayout;

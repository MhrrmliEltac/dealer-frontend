import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;

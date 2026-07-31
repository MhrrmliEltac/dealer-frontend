import { Route, Routes } from "react-router";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { AuthLayout, MainLayout } from "./layout";
import { Toaster } from "@/components/ui/toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

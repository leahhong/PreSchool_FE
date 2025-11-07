import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";

const MainLayout = () => (
  <div className="flex min-h-screen flex-col bg-slate-50">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;


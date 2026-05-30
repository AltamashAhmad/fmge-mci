import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InstallBanner from "./InstallBanner";

export default function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <InstallBanner />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

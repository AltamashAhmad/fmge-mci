import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InstallBanner from "./InstallBanner";
import { useAuth } from "../contexts/AuthContext";

export default function Layout() {
  const { loading } = useAuth();

  return (
    <div className="app-shell">
      <Navbar />
      <InstallBanner />
      <main className="main">
        {loading ? (
          <div className="loading-page">
            <span className="spinner" /> Loading...
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
}

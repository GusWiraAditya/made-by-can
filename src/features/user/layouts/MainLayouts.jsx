import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Di sinilah HomePage atau SettingsPage akan ditampilkan */}
      </main>
      <Footer/>
    </div>
  );
}

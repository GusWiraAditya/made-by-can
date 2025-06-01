import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../features/auth/user/pages/Login";
import Register from "../features/auth/user/pages/Register";
import HomePage from "../features/user/pages/HomePage";
import MainLayout from "../features/user/layouts/MainLayouts";
import CollectionsPage from "../features/user/pages/CollectionsPage";
import ContactPage from "../features/user/pages/ContactPage";
import AboutPage from "../features/user/pages/AboutPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

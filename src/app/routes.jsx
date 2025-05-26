import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../features/auth/user/pages/Login";
import Register from "../features/auth/user/pages/Register";
import HomePage from "../features/user/pages/HomePage";
import MainLayout from "../features/user/layouts/MainLayouts";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} /> 
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}


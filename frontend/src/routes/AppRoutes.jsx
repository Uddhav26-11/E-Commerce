import { Routes, Route } from "react-router-dom";

import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PlaceOrder from "../pages/PlaceOrder";
import Success from "../pages/Success";
import Orders from "../pages/Orders";
import ManagerDashboard from "../pages/ManagerDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Customer Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/success" element={<Success />} />
      <Route path="/orders" element={<Orders />} />

      {/* Auth */}
      <Route path="/auth" element={<Auth />} />

      {/* Manager */}
      <Route
        path="/manager"
        element={
          <ProtectedRoute requiredRole="manager">
            <ManagerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
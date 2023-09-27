import { Route, Routes } from "react-router-dom";

// Custom Pages
import Layout from "./Layout";
import Home from "./pages/Home.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import ProductPage from "./pages/ProductPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

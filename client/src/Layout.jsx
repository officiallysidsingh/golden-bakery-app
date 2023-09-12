import { Outlet } from "react-router-dom";

//Custom Components
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

import { Outlet } from "react-router-dom";

//Custom Components
import Header from "./components/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

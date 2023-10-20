// react router
import { Outlet } from "react-router-dom";
// component
import NavBar from "@/components/layouts/NavBar";

export default function MainLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

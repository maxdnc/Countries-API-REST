// react router
import { Outlet } from "react-router-dom";
// component
import NavBar from "@/components/layouts/NavBar";
import { Toaster } from "../ui/toaster";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-[1440px] p-4">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
}

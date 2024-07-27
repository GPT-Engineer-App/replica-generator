import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-900 text-white">
      <header className="sticky top-0 z-10 bg-gray-800 py-4 px-6">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

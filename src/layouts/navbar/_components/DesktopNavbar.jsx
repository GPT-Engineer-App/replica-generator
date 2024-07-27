import { NavItem } from "./NavItem";
import { Button } from "@/components/ui/button";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="flex items-center gap-6">
    <NavItem to="/" className="flex items-center gap-2 text-lg font-semibold group">
      <img 
        src="https://neetcode.io/assets/neetcode-io-logo.png" 
        alt="NeetCode Logo" 
        className="h-8 w-8 transition-transform duration-300 group-hover:rotate-15"
      />
      <span className="sr-only md:not-sr-only">NeetCode</span>
    </NavItem>
    {navItems.slice(0, 3).map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
    <div className="flex items-center gap-4 ml-auto">
      <Button variant="ghost" size="sm">
        Pro
      </Button>
      <Button variant="ghost" size="icon">
        <span className="sr-only">Toggle theme</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </Button>
      <Button size="sm">Sign in</Button>
    </div>
  </nav>
);

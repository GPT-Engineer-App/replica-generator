import Index from "./pages/Index.jsx";
import Roadmap from "./pages/Roadmap.jsx";

export const navItems = [
  { title: "Courses", to: "/courses" },
  { title: "Practice", to: "/practice" },
  { title: "Roadmap", to: "/roadmap", page: <Roadmap /> },
  { title: "Home", to: "/", page: <Index /> },
];

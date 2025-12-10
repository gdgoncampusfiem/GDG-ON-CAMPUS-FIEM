import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import Home from "./pages/Home.jsx";
import { FloatingNav } from "./components/FloatingNav.jsx";
import {
  HomeIcon,
  Info,
  Users,
  Image,
  CalendarDays,
  Phone,
} from "lucide-react";
const navItems = [
  { name: "Home", link: "#home", icon: <HomeIcon size={16} /> },
  { name: "About", link: "#about", icon: <Info size={16} /> },
  { name: "Team", link: "#team", icon: <Users size={16} /> },
  { name: "Gallery", link: "#gallery", icon: <Image size={16} /> },
  { name: "Event", link: "#event", icon: <CalendarDays size={16} /> },
  { name: "Contact", link: "#contact", icon: <Phone size={16} /> },
];
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div>
          {/* <Navbar /> */}
         <FloatingNav navItems={navItems} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;

import { Background } from "@components/Background";
import Footer from "@components/Footer";
import { Meteors } from "@components/MeteorLanguages";
import Navbar from "@components/Navbar";
import { Stars } from "@components/Stars";
import TopScrollBtn from "@components/TopScrollBtn";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { NavItems } from "./data/NavItems";

import ArrowUp from "@components/Icons/ArrowUp";

function Layout() {
  const [isVisible, setIsVisible] = useState(false);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="overflow-x-hidden relative">
      <Stars />
      <Meteors />
      <Background />
      <section className="bg-transparent min-h-screen overflow-hidden relative">
        <Navbar data={NavItems} />

        <Outlet />
      </section>
      <TopScrollBtn isVisible={isVisible}>
        <ArrowUp extraClassName="w-7 h-7" />
      </TopScrollBtn>
      <Footer />
    </main>
  );
}

export default Layout;

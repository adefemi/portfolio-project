"use client";

import Header from "@/components/common/header";
import useScroll from "@/components/hooks/scroll";
import About from "@/components/pages/About";
import Blogs from "@/components/pages/Blogs";
import Contact from "@/components/pages/Contact";
import Experience from "@/components/pages/Experience";
import Home from "@/components/pages/Home";
import Projects from "@/components/pages/Projects";

export default function Main() {
  const {gotoAbout, handleHashChange} = useScroll()
  return (
    <main>
      <Header handleHashChange={handleHashChange} />
      <Home goToAbout={gotoAbout} />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Blogs />
    </main>
  );
}

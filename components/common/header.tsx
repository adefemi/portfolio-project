import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./menu";
import { motion, AnimatePresence } from "framer-motion";
import Close from "./close";

const Header = ({
  handleHashChange,
}: {
  handleHashChange: (hash: string) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const myHandleHashChange = (hash: string) => {
    handleHashChange(hash);
    toggleMenu();
  };

  return (
    <div className="py-2 px-2 md:px-8 w-full fixed z-50 top-0 bg-primary">
      <div className="flex h-full flex-row items-center justify-between m-auto">
        <Link href="#home" onClick={() => handleHashChange("home")}>
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-end">
          <NavItems handleHashChange={handleHashChange} />
        </nav>
        <button className="block lg:hidden" onClick={toggleMenu}>
          <Menu />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute left-0 top-0 bg-primary z-40 h-fill w-full flex flex-col items-center justify-between px-5 py-36"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <NavItems handleHashChange={myHandleHashChange} />
              <button onClick={toggleMenu} className="absolute top-5 right-5">
                <Close />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NavItems = ({
  handleHashChange,
}: {
  handleHashChange: (hash: string) => void;
}) => {
  return (
    <>
      <Linker
        keyV="experience"
        title="experience"
        handleHashChange={handleHashChange}
      />
      <Linker keyV="about" title="about" handleHashChange={handleHashChange} />
      <Linker
        keyV="project"
        title="projects"
        handleHashChange={handleHashChange}
      />
      <Linker
        keyV="contact"
        title="contact"
        handleHashChange={handleHashChange}
      />
      <Linker keyV="blog" title="blogs" handleHashChange={handleHashChange} />
    </>
  );
};

interface LinkerProps {
  keyV: string;
  title: string;
  active?: string;
  handleHashChange: (hash: string) => void;
}

const Linker = (props: LinkerProps) => (
  <Link
    href={`#${props.keyV}`}
    onClick={() => props.handleHashChange(props.keyV)}
    className={`text-sm text-heading ${props.active} block`}
  >
    {props.title}
  </Link>
);

const Logo = () => (
  <div className="text-white flex items-center lg:block text-base lg:text-lg font-bold">
    <Image
      src="/assets/logo.png"
      width={40}
      height={40}
      alt="logo"
      className="w-10 pr-2 md:pr-0 lg:w-16"
      priority
    />
    <div className="text-xs font-normal text-white text-opacity-30">
      ADEFEMI OSENI
    </div>
  </div>
);

export default Header;

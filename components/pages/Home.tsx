import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Home = ({ goToAbout }: { goToAbout: () => void }) => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-fill content-parent pt-6 sm:pt-12 md:pt-20 lg:pt-44 relative"
      id="home"
    >
      <div className="m-auto flex flex-col items-center lg:items-auto lg:flex-row gap-6 sm:gap-10 md:gap-16 xl:gap-24 w-full">
        <div className="flex flex-col flex-1 justify-between md:mb-12 lg:mb-0">
          <div>
            <motion.h3
              className="flex items-center justify-end font-normal text-base md:text-xl lg:text-sm xl:text-lg text-secondary mt-6 lg:mt-16 xl:mt-24"
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", delay: 1 }}
            >
              Hello There{" "}
              <Image
                src="/assets/wave.png"
                width={30}
                height={30}
                alt="hello wave"
                className="w:4 sm:w-8 4xl:w-12 ml-3"
              />
            </motion.h3>

            <motion.h1
              className="flex items-center justify-end font-bold text-2xl md:text-4xl lg:text-lg xl:text-4xl 4xl:text-6xl xl:mt-2 4xl:mt-6"
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", delay: 1.2 }}
            >
              I am Adefemi Oseni
            </motion.h1>
          </div>
          <div>
            <motion.h2
              className="text-white text-opacity-60 text-sm sm:text-base md:text-xl lg:text-sm xl:text-xl 4xl:text-2xl font-light flex justify-end mb-16 xl:mb-24 4xl:mb-36"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 1.8 }}
            >
              I enjoy building softwares
            </motion.h2>
          </div>
        </div>
        <motion.div
          className="inner m-auto mt-4 sm:mt-8 md:mt-0 h-56 w-56 md:h-100 md:w-100 lg:w-84 lg:h-84 xl:h-120 xl:w-120 4xl:h-150 4xl:w-150"
          initial={{ opacity: 0, originX: 0.5, originY: 1, scale: 0 }}
          animate={{ opacity: 1, originX: 0.5, originY: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.img
            src="/assets/html.png"
            width="150"
            height="150"
            alt="mainImage"
            className="w-10 md:w-16 lg:w-12 xl:w-16 4xl:w-24 absolute z-10 -top-4 4xl:-top-12 -left-3"
            initial={{ opacity: 0, y: 100, rotate: -360, x: 200 }}
            animate={{ opacity: 1, y: 0, rotate: 0, x: 0 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.6 }}
          />
          <motion.img
            src="/assets/python.png"
            alt="mainImage"
            className="w-10 md:w-16 lg:w-12 xl:w-16 4xl:w-24 absolute z-0 -top-16 lg:-top-20 md:-top-24 xl:-top-24 4xl:-top-36 python"
            initial={{ opacity: 0, y: 100, rotate: 360, x: "-50%" }}
            animate={{ opacity: 1, y: 0, rotate: 0, x: "-50%" }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
          />
          <motion.img
            src="/assets/js.png"
            width="150"
            height="150"
            alt="mainImage"
            className="w-10 md:w-16 lg:w-12 xl:w-16 4xl:w-24 absolute z-0 -top-4 4xl:-top-12 -right-3"
            initial={{ opacity: 0, y: 100, rotate: -360, x: -200 }}
            animate={{ opacity: 1, y: 0, rotate: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.95, type: "spring" }}
          />
          <motion.img
            src="/assets/main.svg"
            width="150"
            height="150"
            alt="mainImage"
            className="w-48 md:w-84 lg:w-72 xl:w-100 4xl:w-120 mainImage"
            initial={{
              opacity: 0,
              originX: 0.5,
              originY: 1,
              scale: 0,
              x: "-50%",
            }}
            animate={{
              opacity: 1,
              originX: 0.5,
              originY: 1,
              scale: 1,
              x: "-50%",
            }}
            transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
          />
        </motion.div>
        <div className="flex flex-col flex-1 justify-center relative md:mt-12 lg:mt-0 z-10">
          <motion.h3
            className="font-normal text-base md:text-lg lg:text-sm xl:text-lg text-secondary"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", delay: 1.5 }}
          >
            I&apos;ve been called...
          </motion.h3>
          <motion.h1
            className=" font-bold text-2xl md:text-4xl lg:text-lg xl:text-4xl 4xl:text-6xl xl:mt-2 4xl:mt-6"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", delay: 1.6 }}
          >
            A Software Engineer
          </motion.h1>
        </div>
        <div className="md:hidden flex justify-center">
          <Targetter gotoAbout={goToAbout} notMt />
        </div>
      </div>
      <div className="md:flex hidden">
        <Targetter gotoAbout={goToAbout} />
      </div>
    </div>
  );
};

const Targetter = ({
  gotoAbout,
  notMt = false,
}: {
  gotoAbout: () => void;
  notMt?: boolean;
}) => (
  <div
    className={`items-center justify-center ${
      !notMt && "mt-12"
    } md:mt-28 4xl:mt-72 absolute bottom-5 md:relative md:bottom-0`}
    style={{ zIndex: 3 }}
  >
    <motion.img
      src="/assets/mouse.png"
      width={34}
      height={34}
      alt="mouse"
      className=" w-8 md:w-12 cursor-pointer"
      onClick={gotoAbout}
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", delay: 2.5 }}
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
    />
  </div>
);

export default Home;

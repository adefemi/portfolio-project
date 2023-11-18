import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectType } from "@/utils/type";

const ProjectCards = ({
  data,
  hasMaxWidth = false,
}: {
  data: ProjectType;
  hasMaxWidth?: boolean;
}) => {
  const formattedLink = data.link.replace("https://", "");
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", delay: 0.6 }}
      className={`w-full relative overflow-hidden rounded-2xl ${
        hasMaxWidth && "max-w-5xl"
      } h-100 md:h-84 xl:h-100 4xl:h-150`}
    >
      <Image
        src={data.cover}
        fill
        sizes="100%"
        alt="mainProject"
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute z-10 bottom-0 w-full h-1/3 bg-gradient-to-t from-black via-black/60 px-6  xl:px-12 xl:py-6">
        <h3 className="text-2xl xl:text-5xl">{data.name}</h3>
        <p className="font-satoshi font-normal text-sm xl:text-lg text-white text-opacity-80 mb-1 xl:mb-10">
          {data.description}
        </p>
        <a
          href={data.link}
          target="__blank"
          className="font-sans text-sm xl:text-base"
        >
          {formattedLink}
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCards;

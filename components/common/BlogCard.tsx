import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogType } from "@/utils/type";

const BlogCard = ({
  data,
  hasMaxWidth = false,
}: {
  data: BlogType;
  hasMaxWidth?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", delay: 0.6 }}
      className={`w-full relative overflow-hidden rounded-2xl ${
        hasMaxWidth && "max-w-5xl"
      } h-120 md:h-84 xl:h-100 4xl:h-150`}
    >
      <Image
        src={data.cover}
        fill
        sizes="100%"
        alt="mainProject"
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute z-10 bottom-0 w-full h-1/3 bg-gradient-to-t from-black via-black/60 px-6 py-5 xl:px-12 xl:py-10">
        <h3 className="text-lg xl:text-3xl mb-5 font-satoshi xl:mb-10">
          {data.title}
        </h3>
        <a
          href={data.link}
          target="__blank"
          className="font-sans"
        >
          Read
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;

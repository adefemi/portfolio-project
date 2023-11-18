import { getBlogsUrl } from "@/utils/network";
import { BlogType } from "@/utils/type";
import { motion } from "framer-motion";
import React from "react";
import BlogCard from "../common/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = React.useState<BlogType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(getBlogsUrl);
      const data = await res.json();
      setBlogs(data);
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  const focused = blogs.find((_, index) => index === 0) as BlogType;
  const notFocused = blogs.filter((_, index) => index !== 0);
  return (
    <div
      className="w-full h-fill content-parent relative pt-20 md:pt-36 pb-6 overflow-y-scroll no-scrollbar"
      id="blog"
    >
      <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-20 4xl:gap-x-36 px-5 md:px-8 4xl:px-0 pb-20">
        <div className="flex flex-col items-end text-sm sm:text-base xl:text-xl lg:leading-8 mb-10 md:mb-0">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
            className="text-secondary text-xl xl:text-3xl mb-4 "
          >
            Blogs
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.4 }}
            className="font-satoshi font-normal max-w-lg text-justify"
          >
            I also create blogs both in written form and as a youtube video, all
            about the tech world and how i see it. Here is my latest addition
          </motion.p>
        </div>
        {!isLoading && focused && <BlogCard data={focused} hasMaxWidth />}
      </div>
      <div className="border-t border-white border-opacity-5 px-5 md:px-8 4xl:px-0">
        <div className="grid gap-8 md:gap-4 lg:gap-12 md:grid-cols-2 max-w-13xl mx-auto mt-8 md:mt-16">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            notFocused.map((blog, index) => (
              <BlogCard key={index} data={blog} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

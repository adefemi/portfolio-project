import React from "react";
import ProjectCards from "../common/ProjectCards";
import { motion } from "framer-motion";
import { ProjectType } from "@/utils/type";
import { getProjectsUrl } from "@/utils/network";

const Projects = () => {
  const [projects, setProjects] = React.useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(getProjectsUrl);
      const data = await res.json();
      setProjects(data);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  const focused = projects.find((project) => project.focused) as ProjectType;
  const notFocused = projects.filter((project) => !project.focused);
  return (
    <div
      className="w-full h-fill content-parent relative pt-20 md:pt-36 pb-6 overflow-y-scroll no-scrollbar"
      id="project"
    >
      <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-20 4xl:gap-x-36 px-5 md:px-8 4xl:px-0">
        <div className="flex flex-col items-end text-sm sm:text-base xl:text-xl lg:leading-8 mb-10 md:mb-0">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
            className="text-secondary text-xl xl:text-3xl mb-4 "
          >
            Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.4 }}
            className="font-sans max-w-lg text-justify"
          >
            Take a look at some of the projects I&apos;ve been working on in my
            free time; you might find them interesting.
          </motion.p>
        </div>
        {!isLoading && focused && <ProjectCards data={focused} hasMaxWidth />}
      </div>
      <div className="mx-auto max-w-13xl mt-20 lg:mt-40 px-5 md:px-8 4xl:px-0">
        <h3 className="text-secondary text-xl xl:text-3xl mb-4 ">
          More notable ones
        </h3>
      </div>
      <div className="border-t border-white border-opacity-5  px-5 md:px-8 4xl:px-0">
        <div className="grid gap-8 md:gap-4 lg:gap-12 md:grid-cols-2 max-w-13xl mx-auto mt-8 md:mt-16">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            notFocused.map((project, index) => (
              <ProjectCards key={index} data={project} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

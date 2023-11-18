import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ExperienceType } from "@/utils/type";
import { getExperiencesUrl } from "@/utils/network";

const Experience = () => {
  const [experiences, setExperiences] = React.useState<ExperienceType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchExperience = async () => {
      const res = await fetch(getExperiencesUrl);
      const data = await res.json();
      setExperiences(data);
      setIsLoading(false);
    };
    fetchExperience();
  }, []);

  return (
    <div
      className="w-full h-fill content-parent relative pt-20 md:pt-32 4xl:pt-44 overflow-y-scroll no-scrollbar"
      id="experience"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
          className="text-secondary text-xl lg:text-3xl mb-4 lg:mb-8 px-8"
        >
          Work History
        </motion.h3>
      </div>
      <div className="">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          experiences.map((experience, index) => (
            <ExperienceItem key={index} data={experience} />
          ))
        )}
      </div>
    </div>
  );
};

const ExperienceItem = ({ data }: { data: ExperienceType }) => {
  return (
    <div className="border-0 border-t border-white border-opacity-5 pb-16 4xl:pb-24">
      <div className="w-full max-w-4xl mx-auto flex pt-6 lg:pt-12 px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-orange p-1 flex items-center justify-center rounded-full"
        >
          <Image
            src={data.logo}
            alt="logo"
            width={20}
            height={20}
            className="w-full rounded-full"
          />
        </motion.div>
        <div className="flex-1 pl-3 lg:pl-6">
          <div className="flex items-center justify-between md:mt-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
                className="text-base lg:text-2xl"
              >
                {data.job_title}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", delay: 0.7 }}
                className="text-sm lg:text-lg text-secondary font-normal"
              >
                {data.company_name}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", delay: 1.1 }}
              className="text-xs lg:text-base text-secondary font-normal"
            >
              <div>{data.start_date}</div>
              <div>{data.end_date}</div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", delay: 0.9 }}
            className="md:block hidden"
          >
            <Content info={data.description} />
          </motion.div>
        </div>
      </div>
      <div className="md:hidden block w-full max-w-4xl mx-auto px-8">
        <Content info={data.description} />
      </div>
    </div>
  );
};

const Content = ({ info }: { info: string }) => (
  <p className="mt-7 text-sm lg:text-base leading-8 lg:leading-10 font-sans">
    {info}
  </p>
);

export default Experience;

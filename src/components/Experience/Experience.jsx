import React from "react";
import { motion } from "framer-motion";
import experience from "../Data/Experience.json";
import SectionTitle from "../Common/SectionTitle";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-5 md:px-20 py-10 bg-primary-light dark:bg-dark-blue"
    >
      <SectionTitle title="My Experience" />

      <motion.div
        className="mt-10 space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experience.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-primary"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
              <div>
                <h3 className="text-xl font-bold dark:text-white">
                  {itemData.role}
                </h3>

                <p className="text-primary font-medium">
                  {itemData.company}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {itemData.date}
                </p>
              </div>

              <span className="w-fit px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                {itemData.duration}
              </span>
            </div>

            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
              {itemData.info.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
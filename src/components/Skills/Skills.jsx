import React from "react";
import { motion } from "framer-motion";
import Skillsdata from "../Data/SkillsData.json";
import SectionTitle from "../Common/SectionTitle";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const Skills = () => {
  return (
    <section className="px-5 md:px-20 py-10" id="skills">
      <SectionTitle title="My Skills" />

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Skillsdata.map((elem) => (
          <motion.div
            key={elem.id}
            variants={item}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center p-5 rounded shadow dark:bg-[#101828]"
          >
            <img src={elem.image} className="w-[50px]" />
            <p className="mt-2">{elem.skill}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
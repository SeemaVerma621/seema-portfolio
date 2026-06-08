import React from "react";
import { motion } from "framer-motion";
import aboutData from "../Data/AboutData.json";
import { User, Mail, MapPin, Briefcase } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

const icons = {
  User,
  Mail,
  MapPin,
  Briefcase,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="px-5 md:px-20 py-10" id="about">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="md:flex md:w-full"
      >

        <motion.div variants={item} className="md:w-1/3">
          <p className="text-primary">Get to Know Me</p>
          <SectionTitle title="About Me" />
        </motion.div>

        <motion.div variants={item} className="md:w-2/3">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Frontend Developer with 4+ years of experience in building responsive websites, landing pages, and web applications using HTML, CSS, JavaScript, and WordPress.

            I have strong experience in converting Figma and PSD designs into pixel-perfect web applications and building modern UI/UX interfaces.

            I also have hands-on experience in React.js including dashboards, REST API integration, Context API, React Router DOM, and scalable frontend architecture.
          </p>
        </motion.div>

      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-4 md:gap-5 md:mt-20"
      >
        {aboutData.map((itemData) => {
          const Icon = icons[itemData.icon];

          return (
            <motion.div
              key={itemData.id}
              variants={item}
              className="flex items-center gap-3 px-3 py-3 shadow rounded dark:border border-blue-950"
            >
              <div className="w-12 h-12 min-w-12 rounded-full bg-blue-100 flex items-center justify-center dark:bg-[#101828]">
                <Icon size={22} />
              </div>

              <div>
                <p>{itemData.title}</p>
                <p className="text-[12px]">{itemData.value}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
};

export default About;
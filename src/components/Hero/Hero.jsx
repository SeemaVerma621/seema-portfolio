import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section id="home" className="px-5 md:px-20 bg-primary-light dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col gap-2"
        >
          <p className="text-primary font-semibold text-xl pt-5 md:pt-0">
            Hi, I'm
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-white">
            Seema <span className="text-primary">Verma</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Frontend Developer
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-5 text-sm">
            Frontend Developer with 4+ years of experience in building responsive websites, landing pages, and web applications using HTML, CSS, JavaScript, and WordPress.
            Hands-on experience in React.js through building dashboards, multi-page applications, and REST API integrations using modern React ecosystem.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              className="bg-primary px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/Seema_IMG.png"
            alt="Seema Verma"
            className="w-100 rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import Hero from "../Hero/Hero";
import About from '../About/About'
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import { useTheme } from "../../Context/ThemeContext";
import Experience from "../Experience/Experience";
import { ToastContainer } from "react-toastify";
const Home = () => {
  const {theme, setTheme} = useTheme()
  return (
   <div className={`${theme==="dark" ? "bg-black min-h-screen text-white" : "bg-white min-h-screen text-black"} flex flex-col`}>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Footer/>
    <ToastContainer/>
   </div>
  );
};

export default Home;

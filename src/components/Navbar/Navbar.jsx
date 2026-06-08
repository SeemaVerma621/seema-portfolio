import { Download, Moon, Sun } from "lucide-react";
import React, { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { X, Menu } from "lucide-react";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const { theme, themeHandler } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Skills", to: "#skills" },
    { name: "Projects", to: "#projects" },
    { name: "Experience", to: "#experience" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <>
      <div className="px-5 md:px-20 py-5 fixed w-full top-0 bg-white text-dark-blue dark:bg-gray-900 dark:text-white shadow-md z-50">
        <nav className="flex justify-between items-center">
          <h2 className="hidden text-xl font-bold text-primary-dark md:block">
            Seema <span className="text-dark-blue dark:text-white">Verma</span>
          </h2>

          <ul className="hidden md:flex gap-8 items-center font-semibold">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.to} className="hover:text-blue-500 transition">
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/Seema_Frontend_Developer_Updated.pdf"
                download
                className="bg-primary py-2 px-5 rounded text-white flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </li>

            <li>
              <button
                onClick={themeHandler}
                className="p-2 rounded-full border"
              >
                {theme === "dark" ? <Sun /> : <Moon />}
              </button>
            </li>
          </ul>

          <div className="flex items-center justify-between w-full md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={22} />
            </button>

            <h2 className="text-lg font-bold text-primary-dark">
              Seema{" "}
              <span className="text-dark-blue dark:text-white">Verma</span>
            </h2>

  
            <div className="flex items-center gap-2">
              <button
                onClick={themeHandler}
                className="p-2 rounded-full border"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="/Seema_Frontend_Developer_Updated.pdf"
                download
                className="bg-primary text-white p-2 rounded-lg"
              >
                <Download size={18} />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <Sidebar navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;

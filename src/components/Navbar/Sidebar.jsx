import React from "react";
import { Download, X } from "lucide-react";

const Sidebar = ({ navItems, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-white dark:bg-gray-900 dark:text-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-primary">
            Seema <span className="text-dark-blue dark:text-white">Verma</span>
          </h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col p-5 gap-5">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.to}
                onClick={() => setIsOpen(false)}
                className="block text-lg hover:text-primary"
              >
                {item.name}
              </a>
            </li>
          ))}

          <a
            href="/Seema_Frontend_Developer.pdf"
            download
            className="bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 mt-4"
          >
            <Download size={18} />
            Download Resume
          </a>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
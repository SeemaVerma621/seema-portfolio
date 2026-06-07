import React from "react";
import aboutData from "../Data/AboutData.json";
import { User, Mail, MapPin, Briefcase } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
const About = () => {
  const icons = {
    User,
    Mail,
    MapPin,
    Briefcase,
  };
  return (
    <section className="px-5 md:px-20 py-10" id="about">
      <div className="md:flex md:w-full">
        <div className="md:w-1/3">
          <p className="text-primary">Get to Know Me</p>
          <SectionTitle title="About Me" />
        </div>
        <div className="md:w-2/3">
          <p className="text-sm">
          Frontend Developer with 4+ years of experience in building responsive websites, landing pages, and web applications using HTML, CSS, JavaScript, and WordPress.

I have strong experience in developing mobile-first, user-friendly interfaces and converting Figma and PSD designs into pixel-perfect web applications.

I also have hands-on experience in React.js, where I have built dashboards, multi-page applications, and REST API integrations using React Hooks, Context API, React Router DOM, and modern frontend practices.

My focus is on building clean, scalable, and high-performance web applications with a strong emphasis on UI/UX and responsive design.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-10 md:grid md:grid-cols-4 md:gap-5 md:mt-20">
        {aboutData.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div key={item.id}>
              <div className="flex items-center gap-3 px-3 py-3 shadow rounded light:border-none dark:border border-blue-950 shadow-xl]">
         <div className="w-12 h-12 min-w-12 rounded-full bg-blue-100 flex items-center justify-center dark:bg-[#101828]">
  <Icon size={22} />
</div>
                <div>
                  <p>{item.title}</p>
                  <p className="text-[12px]">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;

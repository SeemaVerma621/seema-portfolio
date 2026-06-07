import React from "react";
const SectionTitle = ({ title }) => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="w-12 h-1 bg-primary rounded-full mt-2"></div>
    </div>
  );
};

export default SectionTitle;
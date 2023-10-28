import React from "react";

const SectionHeading = ({ subTitle, title, className, children }) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h2 className="text-primary text-2xl">{subTitle}</h2>
      <h3 className="text-5xl leading-[56px]">{title}</h3>
      <p className="">{children}</p>
    </div>
  );
};

export default SectionHeading;

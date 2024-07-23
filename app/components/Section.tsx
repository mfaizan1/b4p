import React from "react";

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className="mb-8 bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">{title}</h2>
      <div className="text-gray-300">{children}</div>
    </section>
  );
};

export default Section;

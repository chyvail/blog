/**
 * Heading component for the application.
 * Displays a heading with a title prop
 */

import React from "react";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="custom-container mx-auto">
      <h2 className="text-4xl font-semibold text-slate-900 mt-7">{title}</h2>
    </div>
  );
};

export default Heading;

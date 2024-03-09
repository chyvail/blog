/**
 * TextInput component.
 */

import React from "react";

interface TextInputProps {
  params: {
    id: string;
    title: string;
    type?: string;
  };
}

const TextInput: React.FC<TextInputProps> = ({ params }) => {
  const { id, title, type } = params;
  const textClassName = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;
  return (
    <div>
      <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      {type === "textarea" ? (
        <>
          <textarea id={id} placeholder={title} className={textClassName} />
          <p className="text-sm mt-2 text-right text-gray-600">0/100</p>
        </>
      ) : (
        <input
          type={type || "text"}
          id={id}
          className={textClassName}
          placeholder={title}
          required
        />
      )}
    </div>
  );
};

export default TextInput;

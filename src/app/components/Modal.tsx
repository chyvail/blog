/**
 * Modal component for the application.
 * Displays a form for the post upload: title, date, slug, file upload and content.
 */

import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import TextInput from "./TextInput";
import Button from "./Button";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div
        className="bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto relative custom-modal sm:w-1/2 "
        style={{ maxHeight: "80vh" }}
      >
        <button
          className="modal-close absolute top-0 right-5 mt-4 ml-4 text-slate-900 text-2xl"
          onClick={onClose}
        >
          <IoCloseCircle />
        </button>
        <div className="modal-content py-4 text-left px-6">
          <div>
            <h5 className="text-xl font-extrabold text-slate-900 post-title">
              Create Blog Post
            </h5>
            <p className="font-normal mt-2 flex justify-between text-gray-600">
              Enter your blog details here. Click Save when you are done
            </p>
          </div>
          <div>
            <TextInput
              params={{
                id: "title",
                title: "Blog Title",
              }}
            />
            <TextInput
              params={{
                id: "date",
                title: "Blog Date",
                type: "date",
              }}
            />
            <TextInput
              params={{
                id: "slug",
                title: "Slug",
              }}
            />
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
              Upload File
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Please uplaod images in 100 * 100 pixels size in either PNG
                    or JPEG format
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <TextInput
              params={{
                id: "content",
                title: "Content",
                type: "textarea",
              }}
            />
            <div className="text-right mt-2">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from "react";

import { RiFileEditFill } from "react-icons/ri";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const DocsPage = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800">
      <header className="flex items-center bg-gray-50 py-4 px-6 justify-between shadow-lg">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <RiFileEditFill className="h-8 w-8 text-gray-500 " />
          </Link>
          <h1
            className="text-xl font-bold w-96 px-2 h-12 overflow-x-auto whitespace-nowrap overflow-y-hidden flex items-center"
            contentEditable="true"
          >
            Title of the note
          </h1>
        </div>
        <button
          className="bg-blue-500 text-white rounded-full py-2 px-4 font-semibold shadow-md"
          onClick={() => {
            console.log(content);
          }}
        >
          Save
        </button>
      </header>
      <div className="container mx-auto my-8 h-full overflow-y-auto">
        <main className="flex flex-grow  mx-4 md:mx-10 lg:mx-32 h-full  border-white border-4">
          <ReactQuill className="w-full bg-white    overflow-y-auto mx-auto" />
        </main>
      </div>
    </div>
  );
};

export default DocsPage;

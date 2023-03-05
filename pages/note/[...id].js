import React, { useState } from "react";
import { RiFileEditFill } from "react-icons/ri";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { useRouter } from "next/router";

const DocsPage = ({ note }) => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 flex-grow">
      <header className="flex items-center bg-gray-50 sm:py-4 sm:px-6 px-4 py-1 justify-between flex-shrink-0">
        <div className="flex items-center space-x-1 md:text-xl text-sm ">
          <Link href="/">
            <RiFileEditFill className=" text-gray-500 " />
          </Link>
          <h1
            className="w-48 sm:w-96 font-bold px-2 h-12 overflow-x-auto whitespace-nowrap overflow-y-hidden flex items-center flex-grow"
            contentEditable="true"
          >
            {note.attributes.title}
          </h1>
        </div>
        <button
          className="bg-blue-500 text-white rounded-full sm:py-2 px-2 py-1 sm:px-4 font-semibold shadow-md"
          onClick={() => {
            console.log(content);
          }}
        >
          Save
        </button>
      </header>
      <div className="container mx-auto  flex h-[calc(100vh-6rem)] w-full">
        <div className=" w-full flex  flex-col sm:px-40">
          <ReactQuill className="h-full overflow-y-scroll mx-4 border bg-white" />
        </div>
      </div>
    </div>
  );
};

export default DocsPage;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notes/${id}`
  );
  const noteResponse = await res.json();

  const note = noteResponse.data;
  if (!note) {
    return {
      notFound: true,
    };
  }
  return {
    props: { note },
  };
}

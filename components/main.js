import Link from "next/link";
import { FaChevronRight, FaPlus, FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Main = () => {
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notes`)
      .then((response) => response.json())
      .then((data) => setNote(data));
    console.log(note);
  }, []);

  return (
    <main class="bg-gray-50  mx-2 md:mx-20 my-2 md:my-4 shadow-xl rounded-lg overflow-hidden h-[calc(100vh-6rem)] flex  flex-col">
      <div className="h-16 bg-gray-100 flex justify-between items-center px-8 shadow-md space-x-2">
        <div className="relative flex items-center justify-center w-11/12 mx-auto">
          <input
            type="search"
            placeholder="Search"
            className="py-2 pl-10 pr-6 w-full border border-gray-300 rounded-full text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 bg-gray-50"
          />
          <FaSearch className="absolute left-3 text-gray-400" />
        </div>
        <button className="flex items-center justify-center w-1/12 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <FaPlus className="mr-2" />
          <span className="hidden md:inline">New</span>
        </button>
      </div>
      <ul class="px-4 py-2 mt-2 rounded-lg space-y-2 ">
        {note &&
          note.data.map((note, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white hover:bg-gray-50 hover:text-gray-800 transition duration-300 ease-in-out"
            >
              <Link
                href={`note/${note.attributes.slug}`}
                className="font-medium"
              >
                {note.attributes.title}
              </Link>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">
                <FaChevronRight className="text-gray-800" />
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Main;

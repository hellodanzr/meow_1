import Link from "next/link";
import React from "react";

const MeowPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Meow Page 1</h1>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default MeowPage;

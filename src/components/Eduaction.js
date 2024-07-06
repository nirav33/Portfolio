import React from "react";

function Education() {
  return (
    <>
      <div
        id="education"
        className="pt-4 min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white"
      >
        <div className="container mx-auto py-16">
          {/* Horizontal Line and Heading */}
          <div className="flex items-center mb-12 ml-2">
            <hr className="md:w-10 w-8 border-t-4 border-teal-300 mr-4" />
            <h1 className="md:text-3xl text-2xl text-teal-100 text-left">
              Academic Journey
            </h1>
          </div>
          <div className="m-8 space-y-8">
            {/* B.Tech */}
            <div className="relative flex items-center bg-gray-800 bg-opacity-60 rounded-lg p-4 md:p-6 transform transition duration-500 hover:scale-105 hover:bg-opacity-80">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 h-full border-l-4 border-teal-300"></div>
              <div className="flex-grow pl-8">
                <h2 className="md:text-xl text-md text-teal-300">
                  B.Tech - Computer Science and Engineering
                </h2>
                <div className="w-1/2 border-t-2 border-teal-200 my-2"></div>
                <p className="md:text-md text-sm text-teal-200">
                  National Institute of Technology, Surat
                </p>
              </div>
              <p className="text-lg text-teal-100">2026</p>
            </div>
            {/* HSC */}
            <div className="relative flex items-center bg-gray-800 bg-opacity-60 rounded-lg p-4 md:p-6 transform transition duration-500 hover:scale-105 hover:bg-opacity-80">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 h-full border-l-4 border-teal-300"></div>
              <div className="flex-grow pl-8">
                <h2 className="md:text-xl text-md text-teal-300">HSC</h2>
                <div className="w-1/2 border-t-2 border-teal-200 my-2"></div>
                <p className="md:text-md text-sm text-teal-200">GSEB</p>
              </div>
              <p className="text-lg text-teal-100">2022</p>
            </div>
            {/* SSC */}
            <div className="relative flex items-center bg-gray-800 bg-opacity-60 rounded-lg p-4 md:p-6 transform transition duration-500 hover:scale-105 hover:bg-opacity-80">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 h-full border-l-4 border-teal-300"></div>
              <div className="flex-grow pl-8">
                <h2 className="md:text-xl text-md text-teal-300">SSC</h2>
                <div className="w-1/2 border-t-2 border-teal-200 my-2"></div>
                <p className="md:text-md text-sm text-teal-200">GSEB</p>
              </div>
              <p className="text-lg text-teal-100">2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
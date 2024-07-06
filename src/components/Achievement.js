import React, { useState } from "react";
import Achievement1 from "../Achievements/WebAThon.png";
import Achievement2 from "../Achievements/AmazonHackathon.png";

function Achievement() {
  const achievements = [
    {
      title: "WEB-A-THON",
      description: "Excelled in innovative web development.",
      certificate: Achievement1,
    },
    {
      title: "AMAZON HACKATHON",
      description: "Participated in Amazon's prestigious Hackathon event.",
      certificate: Achievement2,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const changeAchievement = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="achievement"
      className="pt-10 px-4 md:px-6 min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white"
    >
      <div className="flex items-center mb-8 mt-8 md:mt-14">
        <hr className="w-6 md:w-8 border-t-4 border-teal-300 mr-2 md:mr-4" />
        <h1 className="text-xl md:text-3xl text-teal-100 whitespace-normal break-words">
          Achievements
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:px-16">
        {/* Left side - Achievement */}
        <div className="md:w-2/5 flex items-center justify-center px-2 md:px-8 mb-8 md:mb-0 md:ml-16">
          <div className="bg-gray-800 rounded-xl p-4 md:p-8 w-full">
            {/* Horizontal Line and Heading */}
            <div className="flex items-center justify-center mb-6 md:mb-12">
              <h1 className="text-lg md:text-2xl text-teal-100 whitespace-normal break-words text-center">
                {achievements[activeIndex].title}
              </h1>
            </div>
            <div className="flex items-center justify-center">
              {/* Certificate */}
              <img
                src={achievements[activeIndex].certificate}
                alt={`Achievement Certificate ${activeIndex + 1}`}
                className="md:h-48 h-36 object-contain rounded-lg"
              />
            </div>
            {/* Description */}
            <div className="mt-4 md:mt-6 text-center">
              <p className="text-sm md:text-lg text-teal-200">
                {achievements[activeIndex].description}
              </p>
            </div>
            {/* Achievement Navigation */}
            <div className="flex md:flex-row flex-col justify-center mt-6 md:mt-8 md:space-x-2 space-y-2 md:space-y-0 w-full">
              <button
                onClick={() => changeAchievement(0)}
                className={`${
                  activeIndex === 0
                    ? "bg-teal-500 text-gray-900"
                    : "bg-gray-700 text-teal-300"
                } px-2 md:px-4 py-2 rounded-lg focus:outline-none text-xs md:text-base`}
              >
                Achievement 1
              </button>
              <button
                onClick={() => changeAchievement(1)}
                className={`${
                  activeIndex === 1
                    ? "bg-teal-500 text-gray-900"
                    : "bg-gray-700 text-teal-300"
                } px-2 md:px-4 py-2 rounded-lg focus:outline-none text-xs md:text-base`}
              >
                Achievement 2
              </button>
            </div>
          </div>
        </div>
        {/* Right side - Personal Information */}
        <div className="w-full md:w-1/3 p-4 md:p-8 mt-6 md:mt-0 md:ml-40 flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl text-teal-100 mb-4 whitespace-normal break-words">
              Achievement Information
            </h2>
            <p className="text-sm md:text-md text-teal-200 leading-relaxed">
              This section elaborates on the significance of the accomplishment, the process undertaken, any challenges faced, and the overall impact or results achieved. It provides context to understand the achievement's importance.
            </p>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;

import React from "react";
import myImage from "../images/ProfilePic.jpg";

function Home() {
  return (
    <div
      id="home"
      className="pt-8 flex flex-col md:flex-row items-center justify-center mt-16 md:mt-0 min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white"
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 space-y-4">
        <div className="flex items-center mb-2 -ml-12 ">
          <hr className="md:w-8 w-6 border-t-4 border-teal-300 mr-4" />
          <h3 className="md:text-2xl text-xl text-teal-100">Hello, It's Me!</h3>
        </div>
        <h1 className="md:text-5xl text-3xl md:font-extrabold font-semibold text-teal-300">
          Nirav Parmar
        </h1>
        <h3 className="md:text-2xl text-teal-100">
          And I'm a student of NIT Surat
        </h3>
        <p className="md:text-xl max-w-md text-teal-100">
          I'm a web designer with expertise in creating stunning frontend
          designs.
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:ml-16 p-4 relative">
        <div className="absolute inset-0 w-full h-full rounded-full z-0 animate-glowing"></div>
        <img
          src={myImage}
          alt="Nirav Parmar"
          className="relative w-48 h-48 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;

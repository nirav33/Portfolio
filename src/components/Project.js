import React from 'react';
import Learnify from '../images/Learnify.png'; 
import BookStore from '../images/BookStore.png'; 
import Portfolio from '../images/Portfolio.jpg'; 

function Project() {
  return (
    <>
      <div id="project" className="pt-4 min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto py-16">
        <div className="flex items-center mb-12 ml-2">
            <hr className="md:w-10 w-8 border-t-4 border-teal-300 mr-4" />
            <h1 className="md:text-3xl text-2xl text-teal-100 text-left">Inspiring Creations</h1>
          </div>
          <div className="m-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 - Learnify */}
            <a 
              href="https://nirav33.github.io/Learnify/"
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={Learnify} 
                alt="Learnify Project"
                className="w-full md:h-56 h-36 object-fit rounded-2xl p-2"
              />
              <div className="p-4 md:p-6">
                <h2 className="md:text-3xl text-2xl font-medium text-teal-300">Learnify</h2>
                <p className="mt-4 text-md">
                  Learnify is an educational website offering various courses and resources to enhance your learning experience.
                </p>
              </div>
            </a>
            {/* Project 2 - Bookstore */}
            <a 
              href="https://book-store-sigma-seven.vercel.app/"
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={BookStore} 
                alt="Bookstore Project"
                className="w-full md:h-56 h-36 object-fit rounded-2xl p-2"
              />
              <div className="p-4 md:p-6">
                <h2 className="md:text-3xl text-2xl font-medium text-teal-300">Bookstore</h2>
                <p className="mt-4 text-md">
                  A comprehensive online bookstore offering a wide range of books for all kinds of readers.
                </p>
              </div>
            </a>
            {/* Project 3 - Portfolio */}
            <a 
              href="https://nirav33.github.io/Portfolio/"
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={Portfolio} 
                alt="Portfolio Project"
                className="w-full md:h-56 h-36 object-fit rounded-2xl p-2"
              />
              <div className="p-4 md:p-6">
                <h2 className="md:text-3xl text-2xl font-medium text-teal-300">Portfolio</h2>
                <p className="mt-4 text-md">
                  My personal portfolio showcasing my projects, skills, and experiences.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
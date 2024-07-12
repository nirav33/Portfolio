import React, { useState } from 'react';

function Skill() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div id='skill' className="pt-10 px-4 md:px-6 min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white -mb-24 md:-mb-6">
      <div className="flex items-center mb-8 mt-8 md:mt-14">
        <hr className="w-6 md:w-8 border-t-4 border-teal-300 mr-2 md:mr-4" />
        <h1 className="text-xl md:text-3xl text-teal-100 whitespace-normal break-words">
          Skills
        </h1>
      </div>
      <div className="flex justify-center flex-col md:flex-row md:px-16">
        <div className="w-full md:w-3/5 p-4 md:p-8 mt-6 md:mt-0 md:ml-8 flex flex-col justify-between">
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl p-4 md:p-8 shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-xl md:text-2xl text-teal-100 mb-4 whitespace-normal break-words">
              My Skills
            </h2>
            <div className="text-sm md:text-md text-teal-200 leading-relaxed">

              <div className="mt-4">
                <button
                  onClick={() => toggleSection('languages')}
                  className="w-full text-left font-semibold text-teal-200 focus:outline-none transition-colors hover:text-teal-400"
                >
                  Languages {openSection === 'languages' ? '▲' : '▼'}
                </button>
                {openSection === 'languages' && (
                  <ul className="ml-4 list-disc transition-opacity duration-300 ease-in-out opacity-100">
                    <li className="mt-1">C</li>
                    <li className="mt-1">C++</li>
                    <li className="mt-1">Python</li>
                    <li className="mt-1">HTML</li>
                    <li className="mt-1">CSS</li>
                    <li className="mt-1">JavaScript</li>
                  </ul>
                )}
              </div>

              <div className="mt-4">
                <button
                  onClick={() => toggleSection('tools')}
                  className="w-full text-left font-semibold text-teal-200 focus:outline-none transition-colors hover:text-teal-400"
                >
                  Developer Tools {openSection === 'tools' ? '▲' : '▼'}
                </button>
                {openSection === 'tools' && (
                  <ul className="ml-4 list-disc transition-opacity duration-300 ease-in-out opacity-100">
                    <li className="mt-1">VS Code</li>
                    <li className="mt-1">Git/GitHub</li>
                  </ul>
                )}
              </div>

              <div className="mt-4">
                <button
                  onClick={() => toggleSection('framework')}
                  className="w-full text-left font-semibold text-teal-200 focus:outline-none transition-colors hover:text-teal-400"
                >
                  Web Dev Framework {openSection === 'framework' ? '▲' : '▼'}
                </button>
                {openSection === 'framework' && (
                  <ul className="ml-4 list-disc transition-opacity duration-300 ease-in-out opacity-100">
                    <li className="mt-1">React.JS</li>
                    <li className="mt-1">Node.JS</li>
                    <li className="mt-1">Express.JS</li>
                  </ul>
                )}
              </div>

              <div className="mt-4">
                <button
                  onClick={() => toggleSection('database')}
                  className="w-full text-left font-semibold text-teal-200 focus:outline-none transition-colors hover:text-teal-400"
                >
                  Database {openSection === 'database' ? '▲' : '▼'}
                </button>
                {openSection === 'database' && (
                  <ul className="ml-4 list-disc transition-opacity duration-300 ease-in-out opacity-100">
                    <li className="mt-1">MySQL</li>
                    <li className="mt-1">MongoDB</li>
                  </ul>
                )}
              </div>

              <div className="mt-4">
                <button
                  onClick={() => toggleSection('coursework')}
                  className="w-full text-left font-semibold text-teal-200 focus:outline-none transition-colors hover:text-teal-400"
                >
                  Coursework {openSection === 'coursework' ? '▲' : '▼'}
                </button>
                {openSection === 'coursework' && (
                  <ul className="ml-4 list-disc transition-opacity duration-300 ease-in-out opacity-100">
                    <li className="mt-1">DSA</li>
                    <li className="mt-1">DBMS</li>
                    <li className="mt-1">OOP Concepts</li>
                    <li className="mt-1">Computer Networks</li>
                    <li className="mt-1">Operating System</li>
                  </ul>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
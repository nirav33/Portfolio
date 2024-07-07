import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col justify-center items-center">
        {/* Center - Social Media Icons */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl text-teal-300 mb-4">Follow Me</h2>
          <div className="flex md:space-x-8 space-x-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/_.itz_nirav33._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nirav-parmar-b4564a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5C24 2.2 21.8 0 19 0zM8.2 20H5.2V8.2h3V20zm-1.5-13.5c-1 0-1.8-0.8-1.8-1.8 0-1 0.8-1.8 1.8-1.8S8.5 3.7 8.5 4.7C8.5 5.7 7.7 6.5 6.7 6.5zM20 20h-3v-5.7c0-1.4-0.5-2.3-1.8-2.3 -1 0-1.5 0.7-1.8 1.3 -0.1 0.2-0.2 0.5-0.2 0.8V20h-3v-8.4h3v1.1h0c0.4-0.6 1-1.3 2.5-1.3 1.8 0 3.1 1.2 3.1 3.8V20z"
                />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/nirav33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0.3C5.4 0.3 0 5.7 0 12.3 0 17.3 3.4 21.6 8.2 23.2 8.7 23.3 9 23 9 22.6v-2.4c-2.8 0.6-3.4-1.3-3.4-1.3 -0.4-1-1-1.4-1-1.4 -0.8-0.5 0.1-0.5 0.1-0.5 0.9 0.1 1.4 0.9 1.4 0.9 0.7 1.3 1.8 0.9 2.2 0.7 0.1-0.5 0.3-0.9 0.5-1.1 -2.2-0.2-4.5-1.1-4.5-5.1 0-1.1 0.4-2.1 1-2.9 -0.1-0.2-0.4-1.1 0.1-2.3 0 0 0.8-0.2 2.5 0.9 0.8-0.2 1.7-0.3 2.5-0.3 0.8 0 1.7 0.1 2.5 0.3 1.7-1.1 2.5-0.9 2.5-0.9 0.5 1.2 0.2 2.1 0.1 2.3 0.6 0.8 1 1.8 1 2.9 0 4.1-2.3 4.9-4.5 5.1 0.3 0.3 0.6 0.8 0.6 1.6v2.3c0 0.4 0.2 0.7 0.8 0.6 4.7-1.6 8.2-5.9 8.2-10.9C24 5.7 18.6 0.3 12 0.3z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm md:text-md text-teal-400">
        © 2024 Nirav Parmar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

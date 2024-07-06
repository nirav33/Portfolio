import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);

    // If form is valid, you can handle form submission logic here
    if (valid) {
      console.log('Form submitted:', formData);
      // Example: Send form data to backend, reset form, show success message, etc.
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div id='contact' className="pt-10 px-4 md:px-6 min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="flex items-center mb-8 mt-8 md:mt-14">
        <hr className="w-6 md:w-8 border-t-4 border-teal-300 mr-2 md:mr-4" />
        <h1 className="text-xl md:text-3xl text-teal-100 whitespace-normal break-words">
          Contact Me
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:px-16">
        {/* Left side - Description and Profile Icons */}
        <div className="md:w-2/5 flex flex-col items-center justify-center px-2 md:px-8 mb-8 md:mb-0 md:ml-16">
          <div className=" rounded-xl p-4 md:p-8 w-full">
            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl text-teal-100 mb-4 whitespace-normal break-words">
                Contact Information
              </h2>
              <p className="text-sm md:text-md text-teal-200 leading-relaxed">
                Write a brief description here about how users can contact you, your availability, or any other relevant information.
              </p>
            </div>
            {/* Profile Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-teal-300 hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-teal-300 hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 11.34a10 10 0 10-12 0 10 10 0 0012 0zm-3 0a7 7 0 11-14 0 7 7 0 0114 0zm-4.95 2.26a2 2 0 11-2.83-2.83 2 2 0 012.83 2.83z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-teal-300 hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Right side - Message Input Form */}
        <div className="w-full md:w-3/5 p-4 md:p-8 mt-6 md:mt-0 md:ml-8 flex flex-col justify-between">
          <div className="bg-gray-800 rounded-xl p-4 md:p-8">
            <h2 className="text-xl md:text-2xl text-teal-100 mb-4 whitespace-normal break-words">
              Send Me a Message
            </h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none ${errors.name && 'border-red-500'}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none ${errors.email && 'border-red-500'}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className={`bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none ${errors.message && 'border-red-500'}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              <button
                type="submit"
                className="bg-teal-500 text-gray-900 px-4 py-2 rounded-lg focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
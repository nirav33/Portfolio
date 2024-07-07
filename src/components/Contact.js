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

    if (valid) {
      console.log('Form submitted:', formData);
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
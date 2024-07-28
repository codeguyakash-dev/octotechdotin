import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending the form data to an API
    console.log("Form submitted:", formData);
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center w-full font-bold pt-10 pb-10"
    >
      <div>
        <h2 className="text-5xl text-white  text-center">Contact Us</h2>
      </div>
      <div className="w-1/2">
        <form
          className="col-span-4 md:col-span-2 lg:col-span-1"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-white font-normal  mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 font-normal bg-[#292f377b] border-2 border-[#282e3636] rounded"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-normal text-white  mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 font-normal py-2 bg-[#292f377b] border-2 border-[#282e3636] rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-normal text-white  mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full font-normal px-3 py-2 bg-[#292f377b] border-2 border-[#282e3636] rounded"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-slate-800 text-white font-normal rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

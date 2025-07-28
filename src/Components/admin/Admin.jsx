import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [form, setForm] = useState({
    Title: '',
    Price: '',
    Category: '',
    Gender: '',
    Description: '',
    Images: ['', '', '', '']
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users', form)
      .then(res => console.log('Submitted:', res.data))
      .catch(err => console.error('Error submitting form:', err));

    setForm({
      Title: '',
      Price: '',
      Category: '',
      Gender: '',
      Description: '',
      Images: ['', '', '', '']
    });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md">

  <div className="flex items-center mb-2">
    <label className="w-24 mr-2 font-medium">Title:</label>
    <input
      className="flex-1 rounded-lg border border-gray-500 px-2 py-1 outline-none ring-0 focus:ring-2 focus:ring-yellow-300 focus:border-none focus:shadow-sm"
      type="text"
      placeholder="Enter the title"
      name="Title"
      onChange={handleChange}
      value={form.Title}
    />
  </div>

  <div className="flex items-center mb-2">
    <label className="w-24 mr-2 font-medium">Price:</label>
    <input
      className="flex-1 rounded-lg border border-gray-500 px-2 py-1 outline-none ring-0 focus:ring-2 focus:ring-yellow-300 focus:border-none focus:shadow-sm"
      type="text"
      placeholder="Enter the price"
      name="Price"
      onChange={handleChange}
      value={form.Price}
    />
  </div>

  <div className="flex items-center mb-2">
    <label className="w-24 mr-2 font-medium">Category:</label>
    <input
      className="flex-1 rounded-lg border border-gray-500 px-2 py-1 outline-none ring-0 focus:ring-2 focus:ring-yellow-300 focus:border-none focus:shadow-sm"
      type="text"
      placeholder="Enter the category"
      name="Category"
      onChange={handleChange}
      value={form.Category}
    />
  </div>

  <label className="block mb-1 font-medium mt-2">Images:</label>
  {form.Images.map((img, index) => (
    <div className="flex items-center mb-2" key={index}>
      <label className="w-24 mr-2 font-medium">Image {index + 1}:</label>
      <input
        className="flex-1 rounded-lg border border-gray-500 px-2 py-1 outline-none ring-0 focus:ring-2 focus:ring-yellow-300 focus:border-none focus:shadow-sm"
        type="text"
        placeholder={`Image ${index + 1}`}
        value={img}
        onChange={(e) => {
          const newImages = [...form.Images];
          newImages[index] = e.target.value;
          setForm({ ...form, Images: newImages });
        }}
      />
    </div>
  ))}

  <div className="flex items-center mb-2">
    <label className="w-24 mr-2 font-medium">Gender:</label>
    <input
      className="flex-1 rounded-lg border border-gray-500 px-2 py-1 outline-none ring-0 focus:ring-2 focus:ring-yellow-300 focus:border-none focus:shadow-sm"
      type="text"
      placeholder="Enter the gender"
      name="Gender"
      onChange={handleChange}
      value={form.Gender}
    />
  </div>

  <div className="flex items-center mb-2">
    <label className="w-24 mr-2 font-medium">Description:</label>
    <textarea
  className="flex-1 rounded-lg border border-gray-500 px-2 py-1 outline-none ring-0 focus:ring-2 focus:ring-yellow-300 focus:border-none focus:shadow-sm h-24 resize-none"
  placeholder="Enter the description"
  name="Description"
  onChange={handleChange}
  value={form.Description}
/>

  </div>

  <button
    type="submit"
    className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600"
  >
    Submit
  </button>
</form>

    </div>
  );
};

export default Admin;

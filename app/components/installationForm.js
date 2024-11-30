// components/InstallationForm.js
"use client";
import { useState } from 'react';

export default function InstallationForm() {
  const [formData, setFormData] = useState({ name: '', installationId: '', financeId: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert(`Name: ${formData.name}\nInstallation ID: ${formData.installationId}\nFinance ID: ${formData.financeId}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Installation</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Name of Installation</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Installation ID</label>
          <input
            type="text"
            name="installationId"
            value={formData.installationId}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Finance ID</label>
          <input
            type="text"
            name="financeId"
            value={formData.financeId}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

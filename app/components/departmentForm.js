"use client";
import { useState } from 'react';

export default function DepartmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    userId: '',
    role: '',
    financeId: '',
    installationId: '',
    centralId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert(`Form Data:\nFull Name: ${formData.fullName}\nUser ID: ${formData.userId}\nRole: ${formData.role}\nFinance ID: ${formData.financeId}\nInstallation ID: ${formData.installationId}\nCentral ID: ${formData.centralId}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Department</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">User ID</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role in Department</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select a role</option>
            <option value="HOD">HOD</option>
            <option value="Assistant HOD">Assistant HOD</option>
            <option value="Executive assistant">Executive assistant</option>
            <option value="worker">Worker</option>
          </select>
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
          <label className="block text-gray-700">Central ID</label>
          <input
            type="text"
            name="centralId"
            value={formData.centralId}
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

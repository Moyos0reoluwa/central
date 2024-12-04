// components/ProfileForm.js
"use client";

import { useState } from 'react';

export default function ProfileForm() {
  const initialState = {
    surname: '',
    firstName: '',
    middleName: '',
    installationId: '',
    email: '',
    givingNumber: '',
    leadershipLevel: '',
    lifeClassTopic: '',
    lifeClassTeacher: '',
    mentor: '',
    passport: null,
    signature: null,
    dateOfBirth: '',
    installation: '',
    departments: [], // Updated to handle multiple selections
    central: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'departments') {
      const updatedDepartments = checked
        ? [...formData.departments, value]
        : formData.departments.filter(department => department !== value);
      setFormData({ ...formData, departments: updatedDepartments });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        <div className="mb-4">
          <label className="block text-gray-700">Surname</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Giving Number</label>
          <input
            type="text"
            name="givingNumber"
            value={formData.givingNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Leadership Level</label>
          <select
            name="leadershipLevel"
            value={formData.leadershipLevel}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select...</option>
            <option value="Pastor">Pastor</option>
            <option value="Minister">Minister</option>
            <option value="HOD">HOD</option>
            <option value="Assistant HOD">Assistant HOD</option>
            <option value="Executive Assistant">Executive Assistant</option>
            <option value="Worker">Worker</option>
            <option value="Member">Member</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Life Class Topic</label>
          <input
            type="number"
            name="lifeClassTopic"
            value={formData.lifeClassTopic}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Life Class Teacher</label>
          <input
            type="text"
            name="lifeClassTeacher"
            value={formData.lifeClassTeacher}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mentor</label>
          <input
            type="text"
            name="mentor"
            value={formData.mentor}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Passport</label>
          <input
            type="file"
            name="passport"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Signature</label>
          <input
            type="file"
            name="signature"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="text"
            name="dateOfBirth"
            placeholder="MM/DD"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Installation</label>
          <select
            name="installation"
            value={formData.installation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select...</option>
            <option value="Abuja">Abuja</option>
            <option value="Chapel of Reconciliation">Chapel of Reconciliation</option>
            <option value="Chapel of Reconciliation (Malete)">Chapel of Reconciliation (Malete)</option>
            <option value="COHS">COHS</option>
            <option value="FUOYE">FUOYE</option>
            <option value="FUTA">FUTA</option>
            <option value="Global">Global</option>
            <option value="Gospel Empire">Gospel Empire</option>
            <option value="HQ">HQ</option>
            <option value="Kwara Poly">Kwara Poly</option>
            <option value="Lagos">Lagos</option>
            <option value="Tanke">Tanke</option>
            <option value="UNIABUJA">UNIABUJA</option>
            <option value="UNIBADAN">UNIBADAN</option>
            <option value="UNIJOS">UNIJOS</option>
            <option value="UNILORIN">UNILORIN</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Departments</label>
          <div className="flex flex-col space-y-2">
            {[
              'Choir',
              'Power and Sound',
              'Media',
              'Decoration',
              'Ushering',
              'Love and Care',
              'Zoe',
              'Evangelism',
              'Drama',
              'Security and Intelligence',
              'News',
              'Orizon',
              'Publisher',
              'Children',
              'Teens',

              // Add more departments here
            ].map(option => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  name="departments"
                  value={option}
                  checked={formData.departments.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700">Central</label>
          <input
            type="text"
            name="central"
            value={formData.central}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div> */}

        <div className="mb-4">
          <label className="block text-gray-700">Central</label>
          <select
            name="central"
            value={formData.central}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select...</option>
            <option value="Abuja">MPCD</option>
            <option value="Chapel of Reconciliation">Evangelism</option>
            <option value="Chapel of Reconciliation (Malete)">Airspace</option>
            <option value="COHS">Finance</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </form>
     </div> 
  );
}
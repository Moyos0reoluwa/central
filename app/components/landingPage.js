// app/LandingPage.js
"use client";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
      <p className="text-lg mb-8">Please select a form</p>
      <div className="flex flex-col items-center space-y-4">

        <a
          href="/profilePage"
          className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Go to Profile Form
        </a>

        <a
          href="installationPage"
          className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Go to Installation Form
        </a>
        
      </div>
    </div>
  );
}

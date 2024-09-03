import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our To-Do List app! This application helps you manage your tasks efficiently. 
          Whether you need to keep track of your daily tasks or plan your week, our app is here to assist you.
        </p>
        <p className="text-lg mb-4">
          Our app is designed with simplicity and user-friendliness in mind. You can easily add, complete, and remove tasks 
          with just a few clicks. We use modern technologies like React and Tailwind CSS to ensure a smooth and 
          responsive user experience.
        </p>
        <p className="text-lg">
          If you have any questions or feedback, feel free to reach out to us at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>.
        </p>
      </div>
    </div>
  );
}

export default About;


//npm run dev
//"use client"
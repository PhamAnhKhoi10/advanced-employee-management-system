import React from "react";
import { FaUsersCog } from "react-icons/fa";

const Landing = () => {

    const handleNavigateToLogin = () => {
        window.location.href = "/login";
    }

    const handleLearnMore = () => {
        window.location.href = "https://github.com/PhamAnhKhoi10/advanced-employee-management-system";
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4">
            <a
            href="/"
            className="text-xl font-bold hover:text-gray-400 transition duration-300 ease-in-out"
            >
            IU Management
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition"
                onClick={handleNavigateToLogin}
            >
            Log in
            </button>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex items-center px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Text Content */}
            <div>
                <h2 className="text-7xl font-bold leading-tight">
                Manage People
                <br />
                <span className="text-blue-600">Simplify</span>
                </h2>
                <p className="text-gray-400 mt-4 text-lg">
                Focus on your people, let the headache to us!
                </p>
                <div className="mt-6 flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-400 transition"
                onClick={handleNavigateToLogin}
                >
                    Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition"
                onClick={handleLearnMore}
                >
                    Learn More
                </button>
                </div>
            </div>

            {/* Icon */}
            <div className="flex justify-end">
                <FaUsersCog className="text-white" style={{ fontSize: "15rem" }} />
            </div>
            </div>
        </main>
        </div>
  );
};

export default Landing;

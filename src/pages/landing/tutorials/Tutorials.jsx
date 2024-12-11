import React from "react";
import UserLayout from "../../../UserLayout";

const tutorials = [
    {
        id: 1,
        title: "React.js Introduction",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube link
    },
    {
        id: 2,
        title: "JavaScript Basics",
        url: "https://www.youtube.com/embed/o1Y2mhg2aKk", // Example YouTube link
    },
    {
        id: 3,
        title: "Advanced React.js Concepts",
        url: "https://www.youtube.com/embed/h1xKhWRb9IY", // Example YouTube link
    },
];

const TutorialsPage = () => {
    return (
        <UserLayout>

            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Tutorials</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tutorials.map((tutorial) => (
                        <div
                            key={tutorial.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">{tutorial.title}</h2>
                                <div className="relative pb-[56.25%] mb-4">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                                        src={tutorial.url}
                                        title={tutorial.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="bg-gray-800 text-white p-4 text-center">
                                    <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Watch Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </UserLayout>
    );
};

export default TutorialsPage;

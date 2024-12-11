import React from "react";
import UserLayout from "../../../UserLayout";

const lessons = [
    { id: 1, name: "Lesson 1: Introduction", number: "L001", vocabCount: 20 },
    { id: 2, name: "Lesson 2: Basics of English", number: "L002", vocabCount: 15 },
    { id: 3, name: "Lesson 3: Intermediate Grammar", number: "L003", vocabCount: 25 },
    { id: 4, name: "Lesson 4: Advanced Topics", number: "L004", vocabCount: 30 },
];

const LessonsPage = () => {
    return (
        <UserLayout>
            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Lessons</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lessons.map((lesson) => (
                        <div
                            key={lesson.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                        >
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800">{lesson.name}</h2>
                                <p className="text-gray-600 mt-2">Lesson Number: {lesson.number}</p>
                                <p className="text-gray-600 mt-2">Vocabulary Count: {lesson.vocabCount}</p>
                            </div>
                            <div className="bg-gray-800 text-white p-4 text-center">
                                <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </UserLayout>
    );
};

export default LessonsPage;

import React, { useMemo, useState } from "react";
import UserLayout from "../../../UserLayout";
import { useGetLessonQuery } from "../../../apps/features/lesson/lessonApi";
import Pagination from "../../../components/pagination/Pagination";
import PageCount from "../../../components/pagination/PageCount";
import PaginationBtn from "../../../components/pagination/PaginationBtn";
import { Link } from "react-router";

const LessonsPage = () => {
    
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10 });

    const pathname = `page=${pageIndex}&limit=${pageSize}&sort=1`
    const { data, isLoading, isError, isFetching } = useGetLessonQuery(pathname)

    const lessons = useMemo(() => data?.data ? data?.data?.lessons : [], [isLoading, isError, isFetching, pageIndex, pageSize])




    return (
        <UserLayout>
            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 underline">Lessons</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lessons.map((lesson) => (
                        <Link
                           to={`${lesson.lessonNo}`}
                            key={lesson.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                        >
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 capitalize">{lesson.title}</h2>
                                <p className="text-gray-600 mt-2">Lesson Number: {lesson.lessonNo}</p>
                                <p className="text-gray-600 mt-2">Vocabulary Count: {lesson.vocabularyCount}</p>
                            </div>
                           
                        </Link>
                    ))}
                </div>
            </div>
            <Pagination>
                <PageCount total={data?.data?.totalPages} current={pageIndex} />
                <PaginationBtn pageIndex={pageIndex} setPagination={setPagination} totalPages={data?.data?.totalPages} />
            </Pagination>

        </UserLayout>
    );
};

export default LessonsPage;

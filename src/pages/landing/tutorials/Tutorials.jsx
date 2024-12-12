import React, { useMemo, useState } from "react";
import UserLayout from "../../../UserLayout";
import Pagination from "../../../components/pagination/Pagination";
import PageCount from "../../../components/pagination/PageCount";
import PaginationBtn from "../../../components/pagination/PaginationBtn";
import { useGetTutorialQuery } from "../../../apps/features/tutorial/tutorialApi";


const TutorialsPage = () => {

    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10 });

    const pathname = `page=${pageIndex}&limit=${pageSize}&sort=-1`
    const { data, isLoading, isError, isFetching } = useGetTutorialQuery(pathname)
    const tutorials = useMemo(() => data?.data ? data?.data?.tutorial : [], [isLoading, isError, isFetching, pageIndex, pageSize])


    return (
        <UserLayout>

            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 underline">Tutorials</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tutorials.map((tutorial) => (
                        <div
                            key={tutorial._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">{tutorial.title}</h2>
                                <div className="relative  mb-4">
                                    <div dangerouslySetInnerHTML={{ __html: tutorial.youtubeLink }} />
                                    <p className="text-md mt-3 font-semibold text-gray-800 mb-4">{tutorial.description}</p>
                                </div>
                            </div>
                        </div>
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

export default TutorialsPage;

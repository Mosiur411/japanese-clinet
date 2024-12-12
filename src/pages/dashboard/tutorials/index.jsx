
import React, { useMemo, useState } from "react";
import AdminLayout from "../../../AdminLayout";
import Addlessons from "../../../components/dashboard/lessons/addlessons";
import { useGetLessonQuery } from "../../../apps/features/lesson/lessonApi";
import LassaonsTable from "../../../components/dashboard/lessons/lassaonsTable";
import Pagination from "../../../components/pagination/Pagination";
import PaginationBtn from "../../../components/pagination/PaginationBtn";
import PageCount from "../../../components/pagination/PageCount";

const TutorilPageDash = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = `page=${pageIndex}&limit=${pageSize}&sort=1`    
    const { data, isLoading, isError, isFetching } = useGetLessonQuery(pathname)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    /*  data format  */
    const lesson = useMemo(() => data?.data ? data?.data?.lessons : [], [isLoading, isError, isFetching,pageIndex, pageSize])

    

    return (
        <AdminLayout pagetitle="Lessons" openModal={openModal}>
            <LassaonsTable data={lesson} isLoading={isLoading} isError={isError} />
            <Pagination>
                <PageCount total={data?.data?.totalPages} current={pageIndex}  />
                <PaginationBtn pageIndex={pageIndex} setPagination={setPagination} totalPages={data?.data?.totalPages} />
            </Pagination>

            {
                isModalOpen && <Addlessons closeModal={closeModal} />
            }


        </AdminLayout>
    );
};

export default TutorilPageDash;

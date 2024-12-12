
import React, { useMemo, useState } from "react";
import AdminLayout from "../../../AdminLayout";
import Pagination from "../../../components/pagination/Pagination";
import PaginationBtn from "../../../components/pagination/PaginationBtn";
import PageCount from "../../../components/pagination/PageCount";
import TutorialTable from "../../../components/dashboard/tutorial/tutorialTable";
import { useGetTutorialQuery } from "../../../apps/features/tutorial/tutorialApi";
import AddTutorial from "../../../components/dashboard/tutorial/addTutorial";

const TutorialPageDash = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = `page=${pageIndex}&limit=${pageSize}&sort=-1`    
    const { data, isLoading, isError, isFetching } = useGetTutorialQuery(pathname)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    /*  data format  */
    const tutorial = useMemo(() => data?.data ? data?.data?.tutorial : [], [isLoading, isError, isFetching,pageIndex, pageSize])

    

    return (
        <AdminLayout pagetitle="Tutorial" openModal={openModal}>
            <TutorialTable data={tutorial} isLoading={isLoading} isError={isError} />
            <Pagination>
                <PageCount total={data?.data?.totalPages} current={pageIndex}  />
                <PaginationBtn pageIndex={pageIndex} setPagination={setPagination} totalPages={data?.data?.totalPages} />
            </Pagination>

            {
                isModalOpen && <AddTutorial closeModal={closeModal} />
            }


        </AdminLayout>
    );
};

export default TutorialPageDash;

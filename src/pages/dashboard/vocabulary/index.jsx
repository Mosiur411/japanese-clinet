import React, { useMemo, useState } from "react";
import AdminLayout from "../../../AdminLayout";
import Pagination from "../../../components/pagination/Pagination";
import PaginationBtn from "../../../components/pagination/PaginationBtn";
import PageCount from "../../../components/pagination/PageCount";
import VocabularyTable from "../../../components/dashboard/vocabulary/vocabularyTable";
import { useGetVocabularQuery } from "../../../apps/features/vocabulary/vocabularyApi";
import AddVocabulary from "../../../components/dashboard/vocabulary/addVocabulary";

const VocabularyPageDash = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = `page=${pageIndex}&limit=${pageSize}&sort=1`    
    const { data, isLoading, isError, isFetching } = useGetVocabularQuery(pathname)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    /*  data format  */
    const vocabular = useMemo(() => data?.data ? data?.data?.vocabular : [], [isLoading, isError, isFetching,pageIndex, pageSize])

    

    return (
        <AdminLayout pagetitle="Vocabulary" openModal={openModal}>
            <VocabularyTable data={vocabular} isLoading={isLoading} isError={isError} />
            <Pagination>
                <PageCount total={data?.data?.totalPages} current={pageIndex}  />
                <PaginationBtn pageIndex={pageIndex} setPagination={setPagination} totalPages={data?.data?.totalPages} />
            </Pagination>

            {
                isModalOpen && <AddVocabulary closeModal={closeModal} />
            }


        </AdminLayout>
    );
};

export default VocabularyPageDash;

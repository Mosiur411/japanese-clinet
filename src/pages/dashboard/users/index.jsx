
import React, { useMemo, useState } from "react";
import AdminLayout from "../../../AdminLayout";
import Addlessons from "../../../components/dashboard/lessons/addlessons";
import Pagination from "../../../components/pagination/Pagination";
import PaginationBtn from "../../../components/pagination/PaginationBtn";
import PageCount from "../../../components/pagination/PageCount";
import { useGetUserQuery } from "../../../apps/features/user/userApi";
import UserTable from "../../../components/dashboard/user/usersTable";

const UserPageDash = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = `page=${pageIndex}&limit=${pageSize}&sort=1`
    const { data, isLoading, isError, isFetching } = useGetUserQuery(pathname)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    /*  data format  */
    const user = useMemo(() => data?.data ? data?.data?.result : [], [isLoading, isError, isFetching, pageIndex, pageSize])



    return (
        <AdminLayout pagetitle="User" >
            <UserTable data={user} isLoading={isLoading} isError={isError} />
            <Pagination>
                <PageCount total={data?.data?.totalPages} current={pageIndex} />
                <PaginationBtn pageIndex={pageIndex} setPagination={setPagination} totalPages={data?.data?.totalPages} />
            </Pagination>

            {
                isModalOpen && <Addlessons closeModal={closeModal} />
            }


        </AdminLayout>
    );
};

export default UserPageDash;

import React, { useState } from "react";
import AdminLayout from "../../../AdminLayout";
import TableContainer from "../../../components/Table";
import TableBody from "../../../components/Table/TableBody";
import TablebodyData from "../../../components/Table/TablebodyData";
import TableData from "../../../components/Table/TableData";
import TableheadData from "../../../components/Table/TableheadData";
import TableThead from "../../../components/Table/TableThead";
import Addlessons from "../../../components/dashboard/lessons/addlessons";

const LessonsPageDash = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AdminLayout pagetitle="Lessons" openModal={openModal}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <TableContainer>
                    <TableThead>
                        <TableData>
                            <TableheadData text={"Product name"} />
                            <TableheadData text={"Color"} />
                            <TableheadData text={"Category"} />
                            <TableheadData text={"Price"} />
                            <TableheadData text={"Action"} />
                        </TableData>
                    </TableThead>
                    <TableBody>
                        <TableData className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <TablebodyData
                                scope="row"
                                text={'Apple MacBook Pro 17"'}
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            />
                            <TablebodyData text={"Silver"} />
                            <TablebodyData text={"Laptop"} />
                            <TablebodyData text={"$2999"} />
                            <TablebodyData>
                                <button
                                    className="text-blue-600 hover:underline"
                                    onClick={openModal}
                                >
                                    Edit
                                </button>
                            </TablebodyData>
                        </TableData>
                    </TableBody>
                </TableContainer>
            </div>
            {/* Modal */}
            {
                isModalOpen && <Addlessons closeModal={closeModal} />
            }


        </AdminLayout>
    );
};

export default LessonsPageDash;

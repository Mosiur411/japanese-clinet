import { MdDelete } from "react-icons/md";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import TableContainer from "../../Table";
import TableBody from "../../Table/TableBody";
import TablebodyData from "../../Table/TablebodyData";
import TableData from "../../Table/TableData";
import TableheadData from "../../Table/TableheadData";
import TableThead from "../../Table/TableThead";
import LassaonsTableAction from "./lassaonsTableAction";
import { useState } from "react";
import ModalContainer from "../../modal";

const LassaonsTable = ({ data, isLoading, isError }) => {
    // delete 
    const [isModalOpenDelete, setIsModalOpenDelete] = useState({ open: false, id: null });

    let content;
    if (isLoading) content = <Error message={"Loading..."} />;
    if (!isLoading && isError) {
        content = <Loading message={"This Pages Is Empty."} />;
    }
    if (!isLoading && !isError && data?.length > 0) {
        content = data?.map((Lassaon, index) => (
            <TableData key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
                <TablebodyData scope="row" text={Lassaon?.title} />
                <TablebodyData text={Lassaon?.lessonNo} />
                <LassaonsTableAction data={Lassaon} setIsModalOpenDelete={setIsModalOpenDelete} />
            </TableData>
        ));
    }
    if (!isLoading && !isError && data?.length === 0) {
        content = <Error message={"No Products Found!!"} />;
    }

    const closeModal = () => {
        setIsModalOpenDelete({ open: false, id: null })
    }

    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <TableContainer>
                    <TableThead>
                        <TableData>
                            <TableheadData text="Title" />
                            <TableheadData text="Lesson No" />
                            <TableheadData text="Action" />
                        </TableData>
                    </TableThead>
                    <TableBody>
                        {content}

                    </TableBody>
                </TableContainer>
            </div>
            {
                isModalOpenDelete?.open && <ModalContainer title={"Delete Lesson"} closeModal={closeModal}>
                  

                </ModalContainer>
            }


        </div>
    )
}
export default LassaonsTable;

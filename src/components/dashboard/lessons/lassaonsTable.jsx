import { MdDelete } from "react-icons/md";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import TableContainer from "../../Table";
import TableBody from "../../Table/TableBody";
import TablebodyData from "../../Table/TablebodyData";
import TableData from "../../Table/TableData";
import TableheadData from "../../Table/TableheadData";
import TableThead from "../../Table/TableThead";
import { useState } from "react";
import ModalContainer from "../../modal";
import { useDeleteLessonMutation } from "../../../apps/features/lesson/lessonApi";
import { toast } from "react-toastify";
import TableAction from "../../Table/TableAction";

const LassaonsTable = ({ data, isLoading, isError }) => {
    // delete 
    const [isModalOpenDelete, setIsModalOpenDelete] = useState({ open: false, id: null });
    // rtk handel
    const [confimDelete, { isLoading: deleteLoading, isSuccess: deletIssuccess, error: deleteerror, isError: deleteIserror, data: deleteDaa }] = useDeleteLessonMutation()
    // content manges
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
                <TablebodyData text={Lassaon?.vocabularyCount} />
                <TableAction data={Lassaon} setIsModalOpenDelete={setIsModalOpenDelete} />
            </TableData>
        ));
    }
    if (!isLoading && !isError && data?.length === 0) {
        content = <Error message={"No Lessons Found!!"} />;
    }

    const closeModal = () => {
        setIsModalOpenDelete({ open: false, id: null })
    }

    const lassaonDeleteConfirom = async () => {
        const id = isModalOpenDelete?.id
        if (!id) {
            toast.error("Invalid Data")
        } else {
            await confimDelete(id)
            setIsModalOpenDelete({ open: false, id: null })
        }
    }


    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <TableContainer>
                    <TableThead>
                        <TableData>
                            <TableheadData text="Title" />
                            <TableheadData text="Lesson No" />
                            <TableheadData text="Total Vocabulary" />
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
                    <h1 className="text-red-500 text-2xl mt-2">Are you sure?</h1>
                    <div className="flex justify-between items-center gap-2 mt-16">
                        <button onClick={closeModal} className="px-3 py-2 rounded bg-black text-white">Cancel</button>
                        <button onClick={() => lassaonDeleteConfirom()} className="px-3 py-2 rounded bg-red-500 text-white"> {deleteLoading ? "Loading.." : "Delete"}</button>
                    </div>
                </ModalContainer>
            }


        </div>
    )
}
export default LassaonsTable;

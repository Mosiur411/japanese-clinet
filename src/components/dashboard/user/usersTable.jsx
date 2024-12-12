
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
import { toast } from "react-toastify";
import TableAction from "../../Table/TableAction";
import { useDeleteUserMutation, useUpdateUserMutation } from "../../../apps/features/user/userApi";

const UserTable = ({ data, isLoading, isError }) => {
    // delete 
    const [isModalOpenDelete, setIsModalOpenDelete] = useState({ open: false, id: null });
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState({ open: false, data: null });
    const [newRole, setNewRole] = useState("");
    // rtk handel
    const [confimDelete, { isLoading: deleteLoading, isSuccess: deletIssuccess, error: deleteerror, isError: deleteIserror, data: deleteDaa }] = useDeleteUserMutation()
    const [updateUser, { isLoading: updateLoading, }] = useUpdateUserMutation()
    // content manges
    let content;
    if (isLoading) content = <Error message={"Loading..."} />;
    if (!isLoading && isError) {
        content = <Loading message={"This Pages Is Empty."} />;
    }
    if (!isLoading && !isError && data?.length > 0) {
        content = data?.map((user, index) => (
            <TableData key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
                <TablebodyData scope="row" text={user?.name} />
                <TablebodyData text={user?.email} />
                <TablebodyData text={user?.role} />
                <TableAction data={user} setIsModalOpenDelete={setIsModalOpenDelete} setIsModalOpenUpdate={setIsModalOpenUpdate} />
            </TableData>
        ));
    }
    if (!isLoading && !isError && data?.length === 0) {
        content = <Error message={"No Users Found!!"} />;
    }

    const closeModal = () => {
        setIsModalOpenDelete({ open: false, id: null })
    }

    const userDeleteConfirom = async () => {
        const id = isModalOpenDelete?.id
        if (!id) {
            toast.error("Invalid Data")
        } else {
            await confimDelete(id)
            setIsModalOpenDelete({ open: false, id: null })
        }
    }

    const handleRoleUpdate = async () => {
        const id = isModalOpenUpdate?.data?._id;
        if (!id || !newRole) {
            toast.error("Invalid data or role selection");
            return;
        }
        try {
            await updateUser({ _id: id, role: newRole });
            toast.success("Role updated successfully!");
            setIsModalOpenUpdate({ open: false, data: null });
        } catch (error) {
            toast.error("Failed to update role");
        }
    };
    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <TableContainer>
                    <TableThead>
                        <TableData>
                            <TableheadData text="Name" />
                            <TableheadData text="Email" />
                            <TableheadData text="Role" />
                            <TableheadData text="Action" />
                        </TableData>
                    </TableThead>
                    <TableBody>
                        {content}

                    </TableBody>
                </TableContainer>
            </div>
            {
                isModalOpenDelete?.open && <ModalContainer title={"Delete User"} closeModal={closeModal}>
                    <h1 className="text-red-500 text-2xl mt-2">Are you sure?</h1>
                    <div className="flex justify-between items-center gap-2 mt-16">
                        <button onClick={closeModal} className="px-3 py-2 rounded bg-black text-white">Cancel</button>
                        <button onClick={() => userDeleteConfirom()} className="px-3 py-2 rounded bg-red-500 text-white"> {deleteLoading ? "Loading.." : "Delete"}</button>
                    </div>
                </ModalContainer>
            }
            {
                isModalOpenUpdate?.open && <ModalContainer title={"Select Role"} closeModal={closeModal}>

                    <div className="mb-4 mt-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Role  <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setNewRole(e.target.value)}
                        >
                            {
                                ["admin", "user"].map((value, index) => <option key={index} className="capitalize"
                                    selected={value == isModalOpenUpdate?.data?.role} value={value}
                                >{value}</option>)

                            }

                        </select>


                    </div>
                    <div className="flex justify-between items-center gap-2 mt-16">
                        <button onClick={closeModal} className="px-3 py-2 rounded bg-black text-white">Cancel</button>
                        <button onClick={handleRoleUpdate} className="px-3 py-2 rounded bg-blue-500 text-white">
                            {updateLoading ? "Loading.." : "Update Role"}
                        </button>
                    </div>
                </ModalContainer>
            }


        </div>
    )
}
export default UserTable;

import { MdDelete } from "react-icons/md"
import { RiEdit2Fill } from "react-icons/ri"

const TableAction = ({ data, setIsModalOpenDelete, setIsModalOpenUpdate }) => {

    return (
        <td className="px-6 py-4 flex justify-start items-center gap-5">
            <RiEdit2Fill size={18} onClick={() => setIsModalOpenUpdate({ open: true, data: data })} className="cursor-pointer hover:text-red-400" />
            <MdDelete onClick={() => setIsModalOpenDelete({ open: true, id: data?._id })} size={18} className="cursor-pointer hover:text-red-400" />

        </td>

    )
}

export default TableAction;
import { RiCloseCircleLine } from "react-icons/ri";

const ModalContainer = ({ closeModal, title, children }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
        >
            <div
                className="bg-white rounded-lg shadow-lg w-96 p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className=" flex justify-between items-center  gap-10 flex-wrap">
                    <h2 className=" text-xl font-medium mb-4">{title}</h2>
                    <h2 className=" font-bold mb-4"><RiCloseCircleLine  onClick={closeModal} className="hover:text-red-500 cursor-pointer" size={24}/></h2>
                </div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}
export default ModalContainer;
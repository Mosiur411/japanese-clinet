import { yupResolver } from "@hookform/resolvers/yup";
import ModalContainer from "../../modal";
import Button from "../../shared/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCreateTutorialMutation } from "../../../apps/features/tutorial/tutorialApi";
import { TutorialSchema } from "../../Form/validation/TutorialSchema";

const AddTutorial = ({ closeModal }) => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({ resolver: yupResolver(TutorialSchema) });

    const [addTutorial, { isError, isLoading, isSuccess, error, data }] = useCreateTutorialMutation()



    const onSubmit = async (eventData) => {
        await addTutorial(eventData)

    }
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message)
        }
        if (isSuccess) {
            toast.success(data.message)
            reset()
            closeModal()
        }
    }, [isError, isLoading, isSuccess])


    return (
        <ModalContainer title={"Add Tutorial"} closeModal={closeModal}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Title  <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("title")}
                    />
                    {errors && (
                        <span className="text-red-500">{errors?.title?.message}</span>
                    )}
                </div>

                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700">
                        Description  <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("description")}
                    />
                    {errors && (
                        <span className="text-red-500">{errors?.description?.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700">
                        Video Link  <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("youtubeLink")}
                    />
                    {errors && (
                        <span className="text-red-500">{errors?.youtubeLink?.message}</span>
                    )}
                </div>
                <Button isLoading={isLoading} text="Add Tutorial" />

            </form>


        </ModalContainer>
    )
}

export default AddTutorial;

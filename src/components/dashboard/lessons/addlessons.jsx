import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateLessonMutation } from "../../../apps/features/lesson/lessonApi";
import { LessonsSchema } from "../../Form/validation/lessonsSchema";
import ModalContainer from "../../modal";
import Button from "../../shared/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Addlessons = ({ closeModal }) => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({ resolver: yupResolver(LessonsSchema) });

    const [addLesson, { isError, isLoading, isSuccess, error, data }] = useCreateLessonMutation()


    const onSubmit = async (eventData) => {
        await addLesson(eventData)

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
        <ModalContainer title={"Add Lessons"} closeModal={closeModal}>

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
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Lesson No   <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("lessonNo")}
                    />
                    {errors && (
                        <span className="text-red-500">{errors?.lessonNo?.message}</span>
                    )}
                </div>
                <Button isLoading={isLoading} text="Add Lesson" />

            </form>


        </ModalContainer>
    )
}

export default Addlessons;

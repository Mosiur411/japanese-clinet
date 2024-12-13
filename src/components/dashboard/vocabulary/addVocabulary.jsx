import { yupResolver } from "@hookform/resolvers/yup";
import { useGetLessonQuery } from "../../../apps/features/lesson/lessonApi";
import ModalContainer from "../../modal";
import Button from "../../shared/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { VocabularySchema } from "../../Form/validation/VocabularySchema";
import { useCreateVocabularyMutation } from "../../../apps/features/vocabulary/vocabularyApi";

const AddVocabulary = ({ closeModal }) => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({ resolver: yupResolver(VocabularySchema) });

    const [addVocabulary, { isError, isLoading, isSuccess, error, data }] = useCreateVocabularyMutation()
    const { data: Lesson, isLoading: lessonIsLoading } = useGetLessonQuery('page=1&limit=20000&sort=1')



    const onSubmit = async (eventData) => {
        await addVocabulary(eventData)

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
        <ModalContainer title={"Add Vocabulary"} closeModal={closeModal}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700">
                        Word  <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("word")}
                    />
                    {errors && (
                        <span className="text-red-500">{errors?.word?.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700">
                    meaning  <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("meaning")}
                    />
                    {errors && (
                        <span className="text-red-500">{errors?.meaning?.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700">
                    pronunciation  <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("pronunciation")}
                    />
                    {errors && (
                        <span className="text-red-500">{errors?.pronunciation?.message}</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    When to say  <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("when_to_say")}
                    />
                    {errors && (
                        <span className="text-red-500">{errors?.when_to_say?.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Lesson No Select  <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("lessonNo")}
                    >
                        <option value="" selected>Choose Lesson no</option>
                        {Lesson?.data?.lessons?.map((ls, index) => <option key={index} value={ls?.lessonNo}>No-{ls?.lessonNo}</option>)}

                    </select>

                    {errors && (
                        <span className="text-red-500">{errors?.lessonNo?.message}</span>
                    )}
                </div>
                <Button isLoading={isLoading} text="Add Vocabulary" />

            </form>


        </ModalContainer>
    )
}

export default AddVocabulary;

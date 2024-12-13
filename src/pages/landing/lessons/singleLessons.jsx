import { useParams } from "react-router";
import UserLayout from "../../../UserLayout";
import { useGetsingleVocabularQuery } from "../../../apps/features/vocabulary/vocabularyApi";
import Error from "../../../components/shared/Error";
import Loading from "../../../components/shared/Loading";
import { useMemo } from "react";

const SingleLessonsPage = () => {
    let content;
    const { id } = useParams()
    const { data, isError, isLoading } = useGetsingleVocabularQuery(id)
    const vocabulary = useMemo(() => data?.data ? data?.data : [], [isLoading, isError])

    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    }

    if (isLoading) content = <Error message={"Loading..."} />;
    if (!isLoading && isError) {
        content = <Loading message={"This Pages items Is Empty."} />;
    }
    if (!isLoading && !isError && vocabulary?.length > 0) {
        content = vocabulary?.map((lesson) => (
            <div onClick={() => pronounceWord(lesson.word)} className="p-6 border rounded shadow-lg cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">{lesson.word}</h2>
                <p className="text-gray-600 mt-2">Lesson Number: {lesson.lessonNo}</p>
                <p className="text-gray-600 mt-2">Pronunciation: {lesson.pronunciation}</p>
                <p className="text-gray-600 mt-2">Meaning: {lesson.meaning}</p>
            </div>
        ))
    }
    if (!isLoading && !isError && vocabulary?.length === 0) {
        content = <Error message={"No vocabulary Found!!"} />;
    }








    return (
        <UserLayout>


            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 underline">Vocabulary</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content}
                </div>
            </div>



        </UserLayout>
    )
}
export default SingleLessonsPage;
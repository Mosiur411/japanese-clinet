import { useParams } from "react-router";
import UserLayout from "../../../UserLayout";
import { useGetsingleVocabularQuery } from "../../../apps/features/vocabulary/vocabularyApi";

const SingleLessonsPage = () => {
    const { id } = useParams()
    const { data } = useGetsingleVocabularQuery(id)
    
    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP'; 
        window.speechSynthesis.speak(utterance);
    }



    return (
        <UserLayout>


            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 underline">Vocabulary</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data?.data.map((lesson) => (
                        <div onClick={()=>pronounceWord(lesson.word)} className="p-6 border rounded shadow-lg cursor-pointer">
                            <h2 className="text-xl font-semibold text-gray-800 capitalize">{lesson.word}</h2>
                            <p className="text-gray-600 mt-2">Lesson Number: {lesson.description}</p>
                        </div>
                    ))}
                </div>
            </div>



        </UserLayout>
    )
}
export default SingleLessonsPage;
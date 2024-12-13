import * as yup from "yup";
// Form Retailer schema
export const VocabularySchema = yup.object().shape({
    word: yup.string().required("Title field is required"),
    pronunciation: yup.string().required("description field is required."),
    meaning: yup.string().required("description field is required."),
    when_to_say: yup.string().required("description field is required."),
    lessonNo: yup.string().required("lessonNo field is required.")
        
});

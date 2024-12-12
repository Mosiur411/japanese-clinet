import * as yup from "yup";
// Form Retailer schema
export const VocabularySchema = yup.object().shape({
    word: yup.string().required("Title field is required"),
    description: yup.string().required("description field is required."),
    lessonNo: yup.string().required("lessonNo field is required.")
        
});

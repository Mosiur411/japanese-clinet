import * as yup from "yup";
// Form Retailer schema
export const LessonsSchema = yup.object().shape({
    title: yup.string().required("Title field is required"),
    lessonNo: yup.number().required("lessonNo field is required.")
        
});

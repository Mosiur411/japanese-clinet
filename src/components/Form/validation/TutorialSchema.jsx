import * as yup from "yup";
// Form Retailer schema
export const TutorialSchema = yup.object().shape({
    title: yup.string().required("Title field is required"),
    description: yup.string().required("description field is required."),
    youtubeLink: yup.string().required("lessonNo field is required.")

});

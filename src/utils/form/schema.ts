import * as yup from "yup";
import { ObjectSchema } from "yup";


const messageSchema: ObjectSchema<{ message: string | undefined }> = yup.object().shape({
    message: yup.string().required("Message is required").min(2, "Message is too short").max(1000, "Message is too long"),
});


export { messageSchema };
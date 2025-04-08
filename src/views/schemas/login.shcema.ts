import { object, string, ObjectSchema } from "yup";

interface ErrorMessage {
    email: string;
    password: string;
}

type TLoginSchemaFunction = (errorMessage: ErrorMessage) => ObjectSchema<{
    email: string;
    password: string;
}>;

export const loginSchema: TLoginSchemaFunction = (errorMessage) =>
    object({
        email: string().email(errorMessage.email).required(errorMessage.email),
        password: string().min(6,errorMessage.password).required(errorMessage.password),
    });

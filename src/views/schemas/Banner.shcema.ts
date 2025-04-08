import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
    name: string;
    surname: string;
}


type TBannerSchemaFunction = (
    errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;


const bannerSchemaFunction: TBannerSchemaFunction = (errorMessages) =>
    object({
        name: string().required(errorMessages.name),
        surname: string().required(errorMessages.surname),
    });


export const bannerSchema = bannerSchemaFunction;
import { object, string, ObjectSchema } from "yup";

// Define an interface for error messages
type SupplierErrorMessages = {
  name: string;
  email: string;
  company: string;
  phone_number: string;
  address: string;
};

// Define the schema function type
type TSupplierSchemaFunction = (
  errorMessages: SupplierErrorMessages
) => ObjectSchema<SupplierErrorMessages>;

// Create the schema function
const supplierSchemaFunction: TSupplierSchemaFunction = (errorMessages) =>
  object({
    name: string().required(errorMessages.name),
    email: string()
      .email("Invalid email format")
      .required(errorMessages.email),
    company: string().required(errorMessages.company),
    phone_number: string()
      .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
      .required(errorMessages.phone_number),
    address: string().required(errorMessages.address),
  });

// Export the schema function
export const supplierSchema = supplierSchemaFunction;
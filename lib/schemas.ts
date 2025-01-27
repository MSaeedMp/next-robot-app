import { z, ZodSchema } from "zod";

export const emptySchema = z.object({});

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(50, { message: "First name must be less than 50 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(50, { message: "Last name must be less than 50 characters." }),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .max(100, { message: "Email must be less than 100 characters." }),
  phoneNumber: z
    .string()
    .min(6, { message: "Phone number must be at least 6 characters." })
    .max(15, { message: "Phone number must be less than 15 characters." })
    .regex(/^\+?\d+$/, { message: "Phone number must be numeric." }),
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." })
    .max(100, { message: "Company name must be less than 100 characters." }),
  country: z.coerce
    .string()
    .refine((value) => value !== "undefined", {
      message: "Please select a country.",
    }),
  companyType: z.string().optional(),
  message: z
    .string()
    .max(2000, { message: "Message must be less than 2000 characters." })
    .optional(),
  agreement: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}

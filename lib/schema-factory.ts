import { contactFormSchema, emptySchema } from "./schemas";

// Add other schemas here
const schemas = {
  contactFormSchema,
  emptySchema,
  // Add other schemas like `userSchema` here
};

export type SchemaKeys = keyof typeof schemas;

// Factory function
const schemaFactory = (name: SchemaKeys) => {
  return schemas[name];
};

export default schemaFactory;

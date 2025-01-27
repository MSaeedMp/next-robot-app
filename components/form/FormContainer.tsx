"use client";

import { FormProvider, useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import schemaFactory, { SchemaKeys } from "@/lib/schema-factory";
import { useRouter } from "next/navigation";
import { emptySchema } from "@/lib/schemas";
import { ActionResponseType } from "@/utils/types";

type FormContainerProps<T extends FieldValues> = {
  action: (formData: T) => Promise<ActionResponseType> | undefined;
  children: React.ReactNode;
  schemaName?: SchemaKeys;
  className?: string;
  resetFields?: boolean;
  redirectPath?: string;
  redirectReloadPath?: string;
  validationMode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
};

const FormContainer = <T extends FieldValues>({
  action,
  children,
  schemaName,
  className,
  resetFields = false,
  redirectPath,
  redirectReloadPath,
  validationMode = "onChange",
}: FormContainerProps<T>) => {
  const { toast } = useToast();
  const router = useRouter();

  const schema = schemaName ? schemaFactory(schemaName) : emptySchema;
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    mode: validationMode, // Client-side validation
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (formData: T) => {
    const result = await action(formData); // Server-side validation

    if (!result || result.status === "success") {
      if (result?.status === "success") {
        toast({
          description: result.message,
        });
      }

      if (resetFields) reset();
      if (redirectPath) router.push(redirectPath);
      if (redirectReloadPath) window.location.assign(redirectReloadPath);
    }

    if (result && result.status === "error") {
      toast({
        description: result.message,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormContainer;

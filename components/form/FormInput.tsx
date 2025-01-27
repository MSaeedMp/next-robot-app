"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

type FormInputProps = {
  name: string;
  type?: string;
  label?: string;
  defaultValue?: string | number;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  autocomplete?: string;
  required?: boolean;
};

const FormInput = ({
  name,
  type = "text",
  label,
  defaultValue,
  value,
  placeholder,
  disabled,
  autocomplete,
  required = false,
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={name}>
          <div className="flex items-center gap-1 text-base text-foreground">
            <span>{label}</span>
            {required && <span className="text-red-500 text-lg">*</span>}
          </div>
        </Label>
      )}
      <Input
        id={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autocomplete}
        className="py-6 px-5 font-inter !text-base rounded-full"
        {...register(name)}
        disabled={disabled}
        required={required}
      />
      <ErrorLabel name={name} errors={errors} />
    </div>
  );
};

export default FormInput;

import { useEffect } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

type FormSelectProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  options: string[];
  required?: boolean;
};

const FormSelect = ({
  name,
  label,
  placeholder,
  defaultValue,
  options,
  required = false,
}: FormSelectProps) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [name, setValue, defaultValue]);

  return (
    <div className="mb-2 w-full">
      {label && (
        <Label htmlFor={name}>
          <div className="flex items-center gap-1 text-base text-foreground">
            <span>{label}</span>
            {required && <span className="text-red-500 text-lg">*</span>}
          </div>
        </Label>
      )}
      <Select
        defaultValue={defaultValue}
        onValueChange={(value) => setValue(name, value)}
      >
        <SelectTrigger
          id={name}
          aria-label={label || name}
          className="rounded-full py-6 px-4 text-base"
        >
          <SelectValue
            className="text-muted-foreground"
            placeholder={placeholder || "Select an option"}
          />
        </SelectTrigger>
        <SelectContent className="rounded-xl p-2">
          {options.map((opt, index) => (
            <SelectItem className="text-base py-2" key={index} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ErrorLabel errors={errors} name={name} />
    </div>
  );
};

export default FormSelect;

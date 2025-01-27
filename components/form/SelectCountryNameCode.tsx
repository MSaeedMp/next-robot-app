"use client";

import { Label } from "../ui/label";
import { CustomCountryNameCodeType } from "@/utils/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

const SelectCountryNameCode = ({
  countries,
}: {
  countries: CustomCountryNameCodeType[];
}) => {
  const [countryIndex, setCountryIndex] = useState<number>(82);
  const [phoneNumber, setPhoneNumber] = useState("");
  const nameOptions = countries.map((c) => c.fullName);
  const countryCode = countries[countryIndex].fullCode;
  const countryName = countries[countryIndex].fullName;

  const paddingLeft = 25 + countryCode.length * 8;
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setValue("phoneNumber", countryCode + value);
  };

  return (
    <div className="w-full">
      <Label htmlFor="phoneNumber">
        <div className="flex items-center gap-1 text-base text-foreground">
          <span>Phone number</span>
          <span className="text-red-500 text-lg">*</span>
        </div>
      </Label>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <Select onValueChange={(value) => setCountryIndex(+value)}>
          <SelectTrigger className="py-6 rounded-full text-base w-[300px]">
            <SelectValue placeholder={countryName} />
          </SelectTrigger>
          <SelectContent className="rounded-xl p-2">
            {nameOptions.map((opt, index) => (
              <SelectItem
                className="text-base py-2"
                key={index}
                value={String(index)}
              >
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex justify-center items-center mb-2 w-full relative">
          <span className="text-base p-2 inline-block rounded-full absolute left-2 top-[5.5px]">
            {countryCode}
          </span>
          <Input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            style={{ paddingLeft: `${paddingLeft}px` }}
            className="py-6 font-inter !text-base rounded-full"
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
      <ErrorLabel name="phoneNumber" errors={errors} />
    </div>
  );
};

export default SelectCountryNameCode;

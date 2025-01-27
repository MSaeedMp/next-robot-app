"use client";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SelectCountryNameCode from "@/components/form/SelectCountryNameCode";
import { CustomCountryNameCodeType } from "@/utils/types";
import FormSelect from "./FormSelect";
import { companyTypes } from "@/lib/constants";
import TextAreaInput from "./TextAreaInput";
import CheckboxInput from "./CheckboxInput";
import { SubmitButton } from "../button/SubmitButton";
import { contactAction } from "@/utils/actions";

const ContactForm = ({
  countries,
}: {
  countries: CustomCountryNameCodeType[];
}) => {
  return (
    <FormContainer
      schemaName="contactFormSchema"
      action={contactAction}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <FormInput
          name="firstName"
          type="text"
          label="First name"
          required={true}
        />
        <FormInput
          name="lastName"
          type="text"
          label="Last name"
          required={true}
        />
      </div>
      <FormInput name="email" type="email" label="Email" required={true} />
      <SelectCountryNameCode countries={countries} />
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <FormInput
          label="Company name"
          type="text"
          name="companyName"
          required={true}
        />
        <FormSelect
          label="Country"
          name="country"
          placeholder="Please select"
          required={true}
          options={countries.map((c) => c.fullName)}
        />
      </div>
      <FormSelect
        label="Company type"
        name="companyType"
        placeholder="Please select"
        options={companyTypes}
      />
      <TextAreaInput name="message" labelText="Message" />
      <CheckboxInput
        name="agreement"
        label="I agree to receive other information and offers from NRobot (you can unsubscribe from these communications at any time)."
      />
      <p className="lg:text-base text-sm">
        By clicking submit below, you consent to NRobot Privacy Policy.
      </p>
      <SubmitButton className="mt-6 self-start" />
    </FormContainer>
  );
};

export default ContactForm;

export type ActionResponseType = {
  status: "success" | "error";
  message: string;
};

export type CountryNameCodeType = {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
};

export type CustomCountryNameCodeType = { fullName: string; fullCode: string };


export type ContactDataType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  country: string;
  companyType: string;
  message?: string;
  agreement: boolean;
};

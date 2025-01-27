"use server";
import nodemailer from "nodemailer";
import { ContactDataType } from "./types";
import { contactFormSchema, validateWithZodSchema } from "@/lib/schemas";
import { sendErrorToast, sendSuccessToast } from "@/lib/utils";

export const contactAction = async (formData: ContactDataType) => {
  // Server side validation
  const validatedFormData = validateWithZodSchema(contactFormSchema, formData);
  console.log(validatedFormData);
  const email = validatedFormData["email"];
  const fullName =
    validatedFormData["firstName"] + " " + validatedFormData["lastName"];
  const message = validatedFormData["message"] || "Message is empty";

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "2525", 10),
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "NRobot <nrobot@test.io>",
    to: email,
    subject: "We have received your message!",
    text: `Hi ${fullName},\n\nThanks for reaching out. Here’s your message:\n\n${message}\n\nWe’ll get back to you soon!\n\nBest Regards,\nNRobot Company`,
  };

  try {
    console.log("sending email");
    await transporter.sendMail(mailOptions);
    return sendSuccessToast("Your message was sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    return sendErrorToast("Failed to send your message.");
  }
};

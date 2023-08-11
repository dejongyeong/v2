import * as z from "zod";

export const contactSchema = z.object({
  name: z.string({ required_error: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(1, { message: "Please enter your mail subject" }),
  message: z.string().min(5, { message: "Please enter your message with at least 5 characters long" }),
});

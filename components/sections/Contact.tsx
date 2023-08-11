/* eslint-disable jsx-a11y/label-has-associated-control */
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { contactSchema } from "lib/validations/contact";
import Socials from "../shared/Socials";
import Blob from "../shared/contact/Blob";

type Inputs = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {},
  });

  const onSubmit = (data: Inputs) => {
    setIsLoading(true);

    const { name, email, subject, message } = data;
    const params = {
      from_name: name,
      user_email: email,
      subject,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        toast.success("Looking forward to connect with you!", { icon: "🎉", duration: 5000 });
        reset();
      })
      .catch(error => {
        toast.error(`Something went wrong: ${(error as Error).message}. You can connect me via social media`, {
          icon: "❌",
          duration: 5000,
        });
      });

    setIsLoading(false);
  };

  return (
    <div id="contact" className="relative w-full h-auto mb-6 lg:mb-10">
      <Blob />
      <div className="h-full ps-0 min-[1025px]:ps-52 pe-0 min-[1025px]:pe-32 xl:-mt-8">
        <div className="z-10 flex flex-col items-center">
          <div className="divider text-4xl md:text-5xl text-title-blue font-extrabold uppercase">Let&apos;s Chat</div>
          <h3 className="pt-3 pb-6 text-sm">let&apos;s make something great together</h3>
          <Socials />
          <div className="w-full max-w-lg mt-11 mb-10 flex flex-col px-6 pt-2 py-4">
            <form className="grid gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  type="text"
                  id="name"
                  className={`bg-gray-50 border sm:text-sm rounded-lg block w-full p-2.5 text-black focus:outline focus:outline-offset-2 focus:outline-gray-300 focus:shadow-outline ${
                    errors.name && "border-red-500"
                  }`}
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1.5"> {errors.name?.message}</p>}
              </div>
              <div className="form-control">
                <input
                  type="email"
                  id="email"
                  className={`bg-gray-50 border sm:text-sm rounded-lg block w-full p-2.5 text-black focus:outline focus:outline-offset-2 focus:outline-gray-300 focus:shadow-outline ${
                    errors.email && "border-red-500"
                  }`}
                  placeholder="johndoe@youremail.com"
                  {...register("email")}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1.5"> {errors.email?.message}</p>}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  id="subject"
                  className={`bg-gray-50 border sm:text-sm rounded-lg block w-full p-2.5 text-black focus:outline focus:outline-offset-2 focus:outline-gray-300 focus:shadow-outline  ${
                    errors.subject && "border-red-500"
                  }`}
                  placeholder="Subject"
                  {...register("subject")}
                />
                {errors.subject && <p className="text-xs text-red-500 mt-1.5"> {errors.subject?.message}</p>}
              </div>
              <div className="form-control">
                <textarea
                  id="message"
                  className={`bg-gray-50 sm:text-sm rounded-lg block w-full p-2.5 textarea textarea-bordered textarea-lg text-black focus:outline focus:outline-offset-2 focus:outline-gray-300 focus:shadow-outline ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Message"
                  {...register("message")}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1.5"> {errors.message?.message}</p>}
              </div>
              <div className="form-control">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-max mt-2 py-2 px-5 text-md text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:drop-shadow-lg border flex items-center"
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                  Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

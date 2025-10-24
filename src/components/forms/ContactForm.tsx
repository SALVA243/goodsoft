"use client";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  name: string;
  email: string;
  phone: number;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    phone: yup
      .number()
      .transform((originalValue, originalObject) => {
        // Convert empty string to NaN
        return originalObject && originalObject.phone === ""
          ? NaN
          : originalValue;
      })
      .typeError("Phone number is required")
      .required("Phone must be a number"),
    message: yup.string().required().label("Message"),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: FormData) => {
    const notify = () =>
      toast("Message sent successfully", { position: "top-center" });
    notify();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-xl-9 mb-10">
          <span>
            Nous sommes là pour répondre à toutes vos questions et
            préoccupations. Vous pouvez nous joindre via les moyens suivants :
          </span>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              type="text"
              id="name"
              {...register("name")}
              className="form-control"
              placeholder="Noms"
            />
            <p className="form_error">{errors.name?.message}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              type="email"
              id="email"
              {...register("email")}
              className="form-control"
              placeholder="Address Email"
            />
            <p className="form_error">{errors.email?.message}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              type="text"
              id="phone_number"
              {...register("phone")}
              className="form-control"
              placeholder="Numero Téléphone"
            />
            <p className="form_error">{errors.phone?.message}</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <textarea
              {...register("message")}
              id="message"
              className="form-control custom-textarea"
              rows={2}
              placeholder="Messages"
            ></textarea>
            <p className="form_error">{errors.message?.message}</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group pt-10 mb-0">
            <button type="submit" className="cr-btn ml-5">
              Envoyez
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

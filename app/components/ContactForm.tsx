"use client";
import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      const response = await axios.post(
        "https://juntxs.vercel.app/nodemailer",
        data
      );

      if (response.data.message === "Email sent successfully!") {
        setSuccessMessage(
          "¡Recibimos tu mensaje! Pronto te daremos respuesta."
        );
        reset();
      }

      console.log("Respuesta del servidor:", response.data);
    } catch (error: any) {
      console.error("Error al enviar datos al servidor:", error.message);
    }
  };

  return (
    //  GRADIENTE  bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 
    <div className="w-full rounded-[16px] bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5] to-gray-300 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className=" text-4xl font-medium lg:text-[56px] leading-[64px] ">
        Contactanos
      </h1>
      <p className="font-medium text-xl pt-6 lg:pt-[48px] lg:text-[18px]">
        Cualquier sugerencia, escribanos
      </p>

      <div className="w-full lg:w-9/12 p-4 lg:p-8 mt-2 rounded-2xl ">
        <form
          action=""
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete=""
        >
          <div className="flex flex-col-reverse my-3">
            <input
              type="text"
              id="name"
              placeholder="Ingresa tu nombre completo"
              {...register("nombre", {
                required: true,
                pattern: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
              })}
              className="border rounded p-1 text-sm placeholder-zinc-300"
            />

            <label htmlFor="name" className=" flex text-sm">
              <div className="mr-1 text-slate-600">Nombre </div>{" "}
              <div className="text-slate-600"> Completo</div>
              <span className="w-full flex justify-end items-center">
                {errors.nombre?.type === "required" && (
                  <span className="text-red-600 text-[12px] ">
                    Nombre es requerido
                  </span>
                )}
                {errors.nombre?.type === "pattern" && (
                  <p className="text-red-600 text-[12px]">
                    Ingrese tu Nombre y Apellido
                  </p>
                )}
              </span>
            </label>
          </div>

          <div className="flex flex-col-reverse my-3">
            <input
              type="email"
              id="email"
              placeholder="Direccion de Correo Electronico"
              {...register("correo", {
                required: true,
                pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              })}
              className="border rounded p-1 text-sm placeholder-zinc-300"
            />

            <label htmlFor="email" className="flex text-sm text-slate-600">
              Correo{" "}
              <span className="w-full flex justify-end items-center">
                {errors.correo?.type === "pattern" && (
                  <span className="text-red-600 text-[12px]">
                    El Email es incorrecto
                  </span>
                )}
                {errors.correo?.type === "required" && (
                  <span className="text-red-600 text-[12px]">
                    Email es requerido{" "}
                  </span>
                )}
              </span>
            </label>
          </div>

          <div className="flex flex-col-reverse my-3">
            <input
              type="text"
              id="telephone"
              placeholder="Numero Telefónico"
              {...register("celular", {
                required: true,
                pattern: /^(\+\d{1,2}|(\(\d{1,4}\)))?\d{5,15}$/,
              })}
              className="border rounded p-1 text-sm placeholder-zinc-300"
            />

            <label htmlFor="telephone" className="flex text-sm text-slate-600">
              Celular{" "}
              <span className="w-full flex justify-end">
                {errors.celular?.type === "required" && (
                  <span className="text-red-600 text-[12px]">
                    Celular es requerido{" "}
                  </span>
                )}
              </span>
            </label>
          </div>

          <div className="flex flex-col-reverse my-3">
            <input
              type="text"
              id="asunto"
              placeholder="Asunto del mensaje"
              {...register("asunto", {
                required: true,
              })}
              className="border rounded p-1 text-sm placeholder-zinc-300 "
            />

            <label htmlFor="asunto" className="flex  text-sm text-slate-600">
              Asunto
              <span className="w-full flex justify-end">
                {errors.asunto?.type === "required" && (
                  <span className="text-red-600 text-[12px]">
                    Asunto es requerido{" "}
                  </span>
                )}
              </span>
            </label>
          </div>

          <div className="flex flex-col-reverse my-3">
            <textarea
              id="mensaje"
              cols={1}
              rows={4}
              placeholder="Escribenos todos los detalles de tu mensaje"
              {...register("mensaje", {
                required: true,
              })}
              className="border rounded p-1 text-sm placeholder-zinc-300"
            ></textarea>

            <label htmlFor="mensaje" className="flex text-sm text-slate-600">
              Mensaje{" "}
              <span className="w-full flex justify-end items-center">
                {errors.asunto?.type === "required" && (
                  <span className="text-red-600 text-[12px]">
                    El Mensaje es requerido{" "}
                  </span>
                )}
              </span>
            </label>
          </div>

          <div>
            <input
              type="submit"
              value="Enviar"
              className="cursor-pointer border rounded-md w-full lg:w-auto text-white "
            />
          </div>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
}

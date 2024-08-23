"use client";
import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { IoCall, IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const ContactTwo = () => {
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
      const response = await axios.post("/api/nodemailer", data);
      if (response.data.message === "Email sent successfully!") {
        setSuccessMessage(
          "¡Recibimos tu mensaje! Pronto te daremos respuesta. Muchas Gracias!"
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
    <div
      className="w-full bg-gradient-to-br from-[#FDBFBD] via-[#FDBFBD] to-[#FDBFBD]  px-8
      lg:px-16 text-center lg:my-[0px]  pt-14 pb-60  lg:pb-52 "
      id="contacto"
    >
      {/* <h1 className=" text-4xl font-medium lg:text-[35px] leading-[64px] font-rilke-monecias text-[#534547]">
        Contacto
      </h1> */}
      <p className="font-medium text-xl pt-6 lg:pt-[40px] lg:text-[20px] italic">
        Cualquier sugerencia, escribanos
      </p>
      <div className="text-[#03b418] py-3 ">
        {successMessage && <p>{successMessage}</p>}
      </div>
      <div className="w-full  lg:py-8 lg:pr-44 mt-2 rounded-2xl  sm:px-10 md:px-24 lg:px-0 ">
        <form
          action=""
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete=""
          className="max-w-[61rem] w-full  lg:max-w-[800px]  flex flex-col gap-4 mx-auto relative py-[4.5rem] lg:pr-64 lg:pl-16  rounded-xl bg-white "
        >
          <header className="text-[#534547] text-3xl pb-4 font-semibold  lg:text-left font-rilke-monecias">
            Contacto
          </header>
          <img
            src="/assets/rose/rosa-banner.png"
            className="hidden lg:block  w-12 lg:w-10 z-10 absolute -bottom-3 lg:bottom-7  lg:left-12 -translate-x-1/2 "
          />
          <div className="flex flex-col-reverse">
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              {...register("nombre", {
                required: true,
                pattern: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
              })}
              className="border p-3 text-sm h-10 placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-sm rounded-md"
            />

            <label htmlFor="name" className=" flex text-sm">
              <div className="mr-1 text-slate-600"> </div>{" "}
              <div className="text-slate-600"> </div>
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

          <div className="flex flex-col-reverse">
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("correo", {
                required: true,
                pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              })}
              className="border p-3 text-sm h-10 placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-sm rounded-md"
            />

            <label htmlFor="email" className="flex text-sm text-slate-600">
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

          {/* <div className="flex flex-col-reverse my-3">
            <input
              type="text"
              id="telephone"
              placeholder="Numero Telefónico"
              {...register("celular", {
                required: true,
                pattern: /^(\+\d{1,2}|(\(\d{1,4}\)))?\d{5,15}$/,
              })}
              className="border p-3 text-sm h-10 placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-base"
            />

            <label htmlFor="telephone" className="flex text-sm text-slate-600">
              <span className="w-full flex justify-end">
                {errors.celular?.type === "required" && (
                  <span className="text-red-600 text-[12px]">
                    Celular es requerido{" "}
                  </span>
                )}
              </span>
            </label>
          </div> */}

          <div className="flex flex-col-reverse">
            <input
              type="text"
              id="asunto"
              placeholder="Asunto"
              {...register("asunto", {
                required: true,
              })}
              className="border p-3 text-sm h-10 placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-sm rounded-md"
            />

            <label htmlFor="asunto" className="flex  text-sm text-slate-600">
              <span className="w-full flex justify-end">
                {errors.asunto?.type === "required" && (
                  <span className="text-red-600 text-[12px]">
                    Asunto es requerido{" "}
                  </span>
                )}
              </span>
            </label>
          </div>

          <div className="flex flex-col-reverse">
            <textarea
              id="mensaje"
              cols={1}
              rows={4}
              placeholder="Mensaje"
              {...register("mensaje", {
                required: true,
              })}
              className="border p-3 text-sm placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-sm rounded-md"
            ></textarea>

            <label htmlFor="mensaje" className="flex text-sm text-slate-600">
              <span className="w-full flex justify-end items-center">
                {errors.mensaje?.type === "required" && (
                  <span className="text-red-600 text-[12px]">
                    El Mensaje es requerido{" "}
                  </span>
                )}
              </span>
            </label>
          </div>

          <div className="w-full lg:flex lg:justify-end">
            <input
              type="submit"
              value="Enviar"
              className="cursor-pointer border rounded-md w-1/2 lg:w-auto text-white bg-rilke-red px-12 py-2 italic "
              style={{
                boxShadow:
                  "10px 10px 2px -1px rgb(233, 41, 51, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            />
          </div>

          <div className="hidden lg:block  lg:absolute   top-20 h-[34rem] right-0 translate-x-1/2 w-1/2 max-w-[28rem] px-14 py-20 rounded-xl bg-[#534547]">
            <div className="text-left relative text-[#D5CACA]">
              <img
                src="/assets/rose/rosa-banner.png"
                className="hidden lg:block w-12 lg:w-10 z-10 absolute -bottom-1 lg:-top-12  lg:-right-8 "
              />
              {/* <img
                src="/assets/rose/rosa-banner.png"
                className="hidden lg:block w-12 lg:w-10 z-10 absolute -bottom-1 lg:-bottom-14  lg:-right-[6.5rem] -translate-x-1/2 "
              /> */}
              <p className="text-3xl pb-8 font-rilke-monecias text-white">
                Te esperamos{" "}
              </p>
              <p className="pb-8 ">
                En nuestro cafe ubicado en el distrito más bohemio y rico de
                cultura internacional de todo el Perú
              </p>
              <div className="">
                <a
                  href="https://www.google.com/maps/place/Caf%C3%A9+Rilke+Per%C3%BA/@-12.1213276,-77.0368608,19.77z/data=!4m6!3m5!1s0x9105c9b327b765cb:0x560f84cb9c54101a!8m2!3d-12.1213366!4d-77.0366567!16s%2Fg%2F11vbxjvk1w?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-4 pb-3 mb-3 hover:scale-110 transform duration-500 hover:shadow-2xl rounded-lg">
                    <div className="">
                      <IoLocationSharp color="#FF7776" size={22} className="" />
                    </div>
                    <div className="">
                      <p className="text-lg pb-[0.15rem] font-black text-[#D8CCCC] brightness-110  flex leading-6">
                        Miraflores
                      </p>
                      <p className="text-sm">C. Jose Galvez 685</p>
                      <p className="text-sm leading-4">
                        Miraflores, Lima, Perú
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:correo@mail.com?subject=Consulta&body=Hola, me encantaría saber más del servicio..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-4 pb-3 mb-3 hover:scale-110 transform duration-500 hover:shadow-2xl rounded-lg">
                    <div>
                      <IoMdMail color="#FF7776" size={18} />
                    </div>
                    <div>
                      <p className="text-sm pb-1 leading-5">
                        info@caferilke.com
                      </p>
                    </div>
                  </div>
                </a>
                <a href="tel:+983902010">
                  <div className="flex gap-4 pb-4 mb-6 hover:scale-110 transform duration-500 hover:shadow-2xl">
                    <div>
                      <IoCall color="#FF7776" size={20} />
                    </div>
                    <div>
                      <p className="text-sm">+51 93939392</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex gap-10 pl-10 ">
                <p>
                  <a
                    href="https://www.instagram.com/caferilkeperu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={25}
                      className="hover:text-white text-[#e7e7e7] hover:scale-125 duration-700 transform "
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/labodeguitadanke/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF
                      size={25}
                      className="hover:text-white text-[#e7e7e7] hover:scale-125 duration-700 transform "
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/983902010?text=Hola%20que%20tal%20vengo%20de%20cafe-rilke.com%20quisiera%20hacer%20un%20pedido"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      size={28}
                      className="hover:text-white text-[#e7e7e7] hover:brightness-200 hover:scale-125 duration-700 transform  "
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
        <div className="block lg:hidden border-4 border-rose-200 bg-white min-h-[37rem]   px-8 sm:px-14 py-20 rounded-xl mx-auto relative">
          <img
            src="/assets/rose/rosa-banner.png"
            className="block lg:hidden w-12 lg:w-10 z-10 absolute bottom-6  -left-2 -translate-x-1/2 "
          />
          <img
            src="/assets/rose/rosa-banner.png"
            className="block lg:hidden w-12 lg:w-10 z-10 absolute top-10   -right-12 -translate-x-1/2 "
          />
          <div className="text-left">
            <p className="text-3xl  pb-8 font-rilke-monecias">Te esperamos </p>
            <p className="pb-8">
              En nuestro cafe ubicado en el distrito más bohemio y rico de
              cultura internacional de todo el Perú
            </p>
            <div className="">
              <div className="flex gap-4 pb-4 border">
                <div className="border">📍</div>
                <div>
                  <p className="text-xl pb-1 border">MIRAFLORES</p>
                  <p>Mariscal 214 San Antonio</p>
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div>📍</div>
                <div>
                  <p className="text-xl pb-1">Miraflores</p>
                </div>
              </div>
              <div className="flex gap-4 pb-8">
                <div>📍</div>
                <div>
                  <p className="text-xl">Miraflores</p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 mx-auto border sm:pl-10 pb-8 justify-center sm:justify-normal ">
              <p>☎️</p>
              <p>☎️</p>
              <p>☎️</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactTwo;

import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";

export function Footer() {
  return (
    <div className="pt-32 pb-[40px] bg-black    text-white lg:text-[#d9d9d9] relative">
      {/* <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={Logo} alt="Logo" />
        <p className="font-bold text-[#36485C] text-[17px]">Jan Marshal</p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul> */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:px-5  rounded-xl text-center w-[90%] max-w-7xl text-xs sm:text-base bg-black shadow-white shadow-[0px_0px_10px] ">
        <div>
          <p className=" text-sm md:text-lg lg:text-xl m-3">
            &quot;Este es el milagro que sucede a aquellos que aman de
            verdad:&nbsp; Cuanto más dan, más poseen.&quot;
          </p>
          <p className="mb-2">-Rainer Maria Rilke</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start gap-10 md:gap-40 w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 w-full lg:w-1/3 ">
          <p className="text-[#464646] border-[#464646] font-black ">
            CONTACTANOS
          </p>
          <div className="flex flex-col gap-1">
            <div className=" transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-xl  p-1">
              <p className="hover:brightness-150">caferilkebiz@biz.com</p>
            </div>
            <div className=" transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-xl p-1">
              <p className="hover:brightness-150 ">hello@caferilke.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full  gap-2 lg:w-1/3">
          <p className="text-[#464646]">CONECTATE</p>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/labodeguitadanke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                size={25}
                className="text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1"
              />
            </a>
            <a href="mailto:correo@mail.com?subject=Consulta&body=Hola, me encantaría saber más del servicio..." target="_blank" rel="noopener noreferrer">
              <IoMailOutline
                size={28}
                className="text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1"
              />
            </a>
            <a
              href="https://wa.me/983902010?text=Hola%20que%20tal%20vengo%20de%20cafe-rilke.com%20quisiera%20hacer%20un%20pedido"
              target="_blank" rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={28}
                className="text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1"
              />
            </a>
            <a href="https://www.instagram.com/caferilkeperu/" target="_blank" rel="noopener noreferrer">
              <FaInstagram
                size={28}
                className="text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end w-full lg:w-1/3 gap-2 text-center">
          <p className="text-[#464646]">ENCUENTRANOS</p>
          <div className=" text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full p-1">
            <a href="https://www.google.com/maps/place/Caf%C3%A9+Rilke+Per%C3%BA/@-12.1213276,-77.0368608,19.77z/data=!4m6!3m5!1s0x9105c9b327b765cb:0x560f84cb9c54101a!8m2!3d-12.1213366!4d-77.0366567!16s%2Fg%2F11vbxjvk1w?entry=ttu" target="_blank" rel="noopener noreferrer" className="flex items-center " >
              <ImLocation2 className="hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1" size={23} />
              <p>C. José Galvez 685, Miraflores 15074, Lima</p>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center gap-x-[35px] pt-[40px]">
        <FaFacebookF size={20} className="text-[#666666]" />
        <IoMailOutline size={24} className="text-[#666666]" />
        <FaWhatsapp size={24} className="text-[#666666]" />
        <FaInstagram size={24} className="text-[#666666]" />
      </div> */}
      <div className=" text-center text-[14px] font-medium text-[#666666] pt-16">
        <p>© 2024 Café Rilke. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

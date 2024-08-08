import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px] bg-black mx-auto  px-10 text-white lg:text-[#d9d9d9]">
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
      <div className="flex flex-col sm:flex-row justify-start md:justify-center items-center md:items-start gap-10 md:gap-40 w-full ">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 w-full lg:w-auto ">
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

        <div className="flex flex-col justify-center items-center w-full lg:w-auto gap-2">
          <p className="text-[#464646]">CONECTATE</p>
          <div className="flex gap-2">
            <FaFacebookF
              size={25}
              className="text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1"
            />
            <IoMailOutline
              size={28}
              className="text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1"
            />
            <FaWhatsapp
              size={28}
              className="text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1"
            />
            <FaInstagram
              size={28}
              className="text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full hover:text-rilke-red p-1"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end w-full lg:w-auto gap-2">
          <p className="text-[#464646]">ENCUENTRANOS</p>
          <div className="flex flex-col text-white  transition-all duration-700  hover:shadow-rilke-red hover:shadow-[0px_0px_15px] rounded-full p-1">
            <p>C. José Galvez 685, Miraflores 15074, Lima</p>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center gap-x-[35px] pt-[40px]">
        <FaFacebookF size={20} className="text-[#666666]" />
        <IoMailOutline size={24} className="text-[#666666]" />
        <FaWhatsapp size={24} className="text-[#666666]" />
        <FaInstagram size={24} className="text-[#666666]" />
      </div> */}
    </div>
  );
}

{
  /* <p className="pt-[56px] text-center text-[14px] font-medium text-[#666666] sm:pt-5">
  © 2024 Café Rilke. Todos los derechos reservados.
</p> */
}

import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px] bg-[#DBDBDB]">
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

      <div className="flex items-center justify-center gap-x-[35px] pt-[40px]">
        <FaFacebookF size={20} className="text-[#666666]" />
        <IoMailOutline size={24} className="text-[#666666]" />
        <FaWhatsapp size={24} className="text-[#666666]" />
        <FaInstagram size={24} className="text-[#666666]" />
      </div>
      <p className="pt-[56px] text-center text-[14px] font-medium text-[#666666] sm:pt-5">
        © 2024 Café Rilke. Todos los derechos reservados.
      </p>
    </div>
  );
}

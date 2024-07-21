import Image from "next/image";
import logoCafe from "../../public/assets/logo-cafe.png";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Home" },
  { name: "Acerca" },
  { name: "Carta" },
  { name: "Galeria" },
  { name: "Testimonios" },
  { name: "Evento" },
  { name: "Contacto" },
];

const styles = {
  // filter: 'brightness(111%) invert(1)',
};

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center fixed z-10 top-0">
        <Image src={logoCafe} alt="Logo" style={styles} />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          
        </p>

        <div className="flex items-center gap-x-2">
          {/* <Image src={User} alt="User Profile" /> */}
          <span className="hidden font-medium text-[#36485C] lg:block">
            
          </span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}

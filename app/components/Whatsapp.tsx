import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Whatsapp: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-7  z-50  flex justify-center items-center animate-custom-pulse-3 gap-3 ">
      <a
        href="https://wa.me/983902010?text=Hola%20que%20tal%20vengo%20de%20cafe-rilke.com%20quisiera%20hacer%20un%20pedido"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-[#47C755] text-white rounded-md  text-xl p-2 relative">
          <p className="font-sans flex gap-1">
            <FaWhatsapp color="white" className="" size={30} />
            Pide Ya!
          </p>
          <div
            className=" absolute -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2  "
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid #47C755",
            }}
          ></div>
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;

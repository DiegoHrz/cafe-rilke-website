import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Whatsapp: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-8  z-50  flex flex-col justify-center items-center animate-custom-pulse-3 gap-3">
      <div className="bg-[#47C755] text-white   text-xl p-2 relative">
        <p className="font-sans">Pide Ya!</p>
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
      <FaWhatsapp color="#47C755" className="" size={50} />
    </div>
  );
};

export default Whatsapp;

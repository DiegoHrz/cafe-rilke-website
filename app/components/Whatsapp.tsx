import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Whatsapp: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-3  z-50  flex justify-center items-center animate-custom-pulse-3 gap-3">
      <div className="bg-[#47C755] text-white   text-xl p-2 relative">
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
    </div>
  );
};

export default Whatsapp;

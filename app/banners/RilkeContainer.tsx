import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";
import homeCafe from "../../public/assets/home-cafe-2.jpg";

export function RilkeContainer() {
  return (
    <div
      className="pt-4 lg:pt-10 bg-black text-white font-rilke-theme lg:py-10 "
      style={{ padding: "100px 0" }}
    >
      <div
        className=" md:w-[768px] lg:w-[1024px] "
        style={{
          paddingRight: "15px",
          paddingLeft: "15px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <h1 className="text-center text-[32px] leading-[40px]  text-2xl  sm:text-4xl lg:leading-[72px]  relative w-fit mx-auto italic font-semibold" style={{fontFamily:'Aldus'}} >
          La Rosa de Rilke
          {/* Rosa Vertical */}
          <img
            src="/assets/rose/media-rosa-superior.png"
            alt=""
            className="absolute bottom-[39%] lg:bottom-[37%] left-1/2 h-12   transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="/assets/rose/media-rosa-inferior2.png"
            alt=""
            className="absolute top-[163%] lg:top-[120%] left-1/2 h-16 brightness-[10]  transform -translate-x-1/2 -translate-y-1/2"
          />
          {/* Rosa Horizontal */}
          {/* <img
            src="/assets/rose/media-rosa-superior.png"
            alt=""
            className="absolute top-1/2 left-[110%]  h-8 sm:h-12 brightness-[1.5]   transform -translate-x-1/2 -translate-y-1/2 rotate-90"
          />
          <img
            src="/assets/rose/media-rosa-inferior2.png"
            alt=""
            className="absolute top-1/2 right-[104%]   h-8 sm:h-16 brightness-[10]  transform -translate-x-1/2 -translate-y-1/2 rotate-90  "
          /> */}
        </h1>
        <p className="text-center mt-20 lg:mt-[50px] mb-3 text-[15px]  lg:leading-7 italic font-light ">
          Cuando el poeta Rainer Maria Rilke estudiaba en París, todos los días,
          él y una amiga tomaban el mismo camino a la universidad. Y todos los
          días pasaron por una señora sentada en el suelo, pidiendo limosna. La
          amiga de Rilke muchas veces le regaló algunas moneditas, pero Rilke
          nunca. Un día, su amiga le pregunta a Rilke: Por qué tú nunca le das
          nada a la pobre mujer? Cuando vuelven el próximo día, se repite la
          misma historia de siempre. La amiga de Rilke le da limosna a la mujer,
          más Rilke no. Pero esta vez, Rilke trajo una hermosa rosa. Y esta rosa
          le entrega a la señora. Y ella, que siempre está con la mirada en el
          suelo, esperando las monedas que algunas personas le iba a tirar a sus
          pies, por primera vez levanta sus ojos. Levanta sus ojos, se para,
          toma la rosa, la coloca sobre su corazón y se va. Se va y desaparece
          por toda una semana.
        </p>
        <p className="text-center mt-8 mb-3 text-[15px] lg:text-sm lg:leading-7 italic font-light">
          Después de esta semana, vuelve nuevamente y sigue su vida de antes,
          sentada en el suelo, pidiendo limosna. La amiga de Rilke, asombrada,
          le pregunta a él: De qué habrá vivido esta mujer todos estos días sin
          dinero? Y Rilke le contesta: De la rosa.
        </p>
      </div>

      {/* <div className="relative flex h-full w-full justify-center">
        <Image
          src={homeCafe}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          {/* <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%] "
            style={{
              backgroundImage: "url(assets/images/home-cafe-2.jpg)",
              height: "956px",
              backgroundPosition: "50% 50%",
              position: "relative",

              backgroundSize: "cover",
            }}
          /> */}
      {/* 
          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle  lg:grid-cols-5">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
              <Image src={Truspilot} alt="" />
              <Image src={Cnn} alt="" />
              <Image src={Cluth} alt="" />
            </div>
          </div> 
        </div>
      </div> */}
    </div>
  );
}

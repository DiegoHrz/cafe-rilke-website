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
import logoCafe from "../../public/assets/logo-cafe.png";

export function Home() {
  return (
    <div className="pt-4 lg:pt-0 h-screen" id="home">
      <div className="relative flex h-full w-full justify-center bg-fixed bg-parallax bg-cover bg-center bg-no-repeat">
        {/* <img
          src="/assets/home-cafe-2.jpg"
          alt=""
          className="min-h-[500px] object-cover lg:h-auto"
        /> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <img
            src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
            alt=""
            className=" h-full w-fit mx-auto px-3"
          />
          <img
            src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
            alt=""
            className=" mx-auto mt-4  "
          />
        </div>

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

        {/* <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
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
          </div> */}
      </div>
    </div>
  );
}

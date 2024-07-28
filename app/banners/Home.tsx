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

export function Home() {
  return (
    <div className="pt-4 lg:pt-0" id='home'>
      <div className="px-[20px] lg:px-[280px]">

      </div>

      <div className="relative flex h-full w-full justify-center">
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
    </div>
  );
}

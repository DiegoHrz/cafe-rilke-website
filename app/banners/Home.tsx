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
    <div className=" h-screen border-2 border-red-500" id="home">
      <div className="relative flex h-full w-full justify-center  bg-parallax bg-cover bg-center bg-no-repeat">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <img
            src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
            alt=""
            className=" h-full w-fit mx-auto px-3 animate-fade-title"
          />
          <img
            src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
            alt=""
            className=" mx-auto mt-4  animate-fade-subtitle"
          />
        </div>
      </div>
    </div>
  );
}

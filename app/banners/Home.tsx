import Image from "next/image";
import homeCafe from "../../public/assets/home-cafe-2.jpg";
import logoCafe from "../../public/assets/logo-cafe.png";

export function Home() {
  return (
    <div className="h-screen" id="home">
      <div className="relative flex h-full w-full justify-center bg-fixed bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${homeCafe.src})`}}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <Image
            src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
            alt="White Logo"
            width={300}
            height={100}
            className="h-auto w-fit mx-auto px-3 animate-fade-title"
          />
          <Image
            src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
            alt="Cafe Logo"
            width={200}
            height={50}
            className="mx-auto mt-4 animate-fade-subtitle"
          />
        </div>
      </div>
    </div>
  );
}


export function Home() {
  return (
    <div className=" h-screen" id="home">
      <div className="relative flex h-full w-full justify-center bg-fixed bg-parallax-img bg-cover bg-center ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <img
            src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
            alt=""
            className=" h-full w-fit mx-auto px-3 "
          />
          <img
            src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
            alt=""
            className=" mx-auto mt-4  "
          />
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div
      className="flex flex-col py-16 lg:pt-24 lg:pb-52 px-4 md:px-8 lg:px-4 "
      id="acerca"
    >
      <h1 className="pt-[12px] text-2xl  text-[#172026] lg:text-[42px] lg:leading-[58px] text-center pb-10 font-rilke-monecias">
        Acerca de Café Rilke
      </h1>
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start  mx-auto  relative p-4 ">
        <img
          src="/assets/rose/rosa-banner.png"
          className="hidden md:block w-28 absolute -bottom-10 lg:-bottom-40 right-0 lg:left-1/2 lg:-translate-x-1/2"
        />
        <div className="h-full">
          <img
            src="/assets/image-about.jpg"
            alt="Feature 1 image"
            className="w-[29rem] p-2 lg:p-0"
          />
        </div>

        <div className=" ">
          <div className="lg:w-[30rem] flex flex-col justify-center items-center text-[15px] md:text-[16px] italic leading-7">
            <p className=" font-rilke-aldus text-[#666666]">
              Café Rilke es el sueño común de la periodista, filósofa y teóloga
              alemana, Anke Gossen, y el pintor y esculptor peruano Fernando de
              la Jara. Crearon el Café Rilke según el lema del obíspo brasileño,
              Hélder Câmara: &quot;Cuando sueñas solo, sólo es un sueño; cuando
              sueñas con otros, es el comienzo de una nueva realidad&quot;. Anke
              sueña con un buen futuro para niños en condiciones dificiles a
              través de la educación. Fernando sueña con alumbrar el mundo a
              través del arte y de la belleza. Juntos invitan a todos los que
              cruzan el umbral a su hermoso local de volverse parte de este
              sueño. Porque engriéndose así mismos con las delicias para el
              paladar y disfrutando de este extraordinario ambiente apoyan a la
              asociación Sembrando Semillas - Educación para Todos. Gran parte
              de los beneficios del Café Rilke está destinada a que los los
              niños, adolescentes y jóvenes de este proyecto vayan al colegio,
              que reciban un buen almuerzo, que estén acompañados con sus tareas
              y que puedan pasar su tiempo libre jugando y divertiendose en un
              lugar sano y saludable.
            </p>
            <div className="flex justify-center items-center gap-4 lg:gap-10 pt-10">
              <button className="border-2 border-rilke-red  rounded-3xl px-3 py-2 lg:px-8 italic hover:bg-rilke-red hover:text-white hover:shadow-xl transition duration-[1.5s] ease-in-out !font-light">
                Descargar Menu
              </button>
              <a href="#galeria">
                <button className="border-2 border-rilke-red rounded-3xl px-6 py-2 lg:px-9 italic hover:bg-rilke-red hover:text-white hover:shadow-xl transition duration-[1.5s] ease-in-out !font-light">
                  Ver Galería
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your sites new subscribers
          </h1>
          <Image
            src={Feature3}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <div className="flex w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C] ">Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36485C]">Conse adipiscing elit</p>
            </div>
          </div>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={pinkButton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div> */}
    </div>
  );
}

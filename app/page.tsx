import { ContactForm } from "./banners/ContactForm";
import { Gallery } from "./banners/Gallery";
import { About } from "./banners/About";
import { Footer } from "./banners/Footer";
import { Home } from "./banners/Home";
import { Navbar } from "./banners/Navbar";
import { Menu } from "./banners/Menu";
import { RilkeContainer } from "./banners/RilkeContainer";
import { ScrollSpy } from "./components/ScrollSpy";
import Marketing from "./banners/Marketing";
import CardSlider from "./components/CardSlider";
import BestSellers from "./banners/BestSellers";
import Whatsapp from "./components/Whatsapp";
import ContactTwo from "./banners/ContactTwo";
// import Carousel from "./components/Carousel";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollSpy />
      <section id="home">
        <Home />
        <BestSellers />
        <Marketing />
      </section>
      <section id="carta">
        <Menu />
      </section>
      <section id="galeria">
        <Gallery />
      </section>
      <section id="evento">
        <RilkeContainer />
      </section>

      <section id="acerca">
        <About />
      </section>

      {/* <section id="contacto">
        <ContactForm />
      </section> */}
      <ContactTwo />
      <Footer />
      <Whatsapp />
    </>
  );
}

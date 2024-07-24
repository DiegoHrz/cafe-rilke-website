import { ContactForm } from "./banners/ContactForm";
import { Gallery } from "./banners/Gallery";
import { About } from "./banners/About";
import { Footer } from "./banners/Footer";
import { Home } from "./banners/Home";
import { Navbar } from "./banners/Navbar";
import { Menu } from "./banners/Menu";
import { RilkeContainer } from "./banners/RilkeContainer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className=" lg:container lg:px-20 mx-auto">
        {/* px-[20px] */}
        <About />
        <Menu />
      </div>
      <RilkeContainer />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
}

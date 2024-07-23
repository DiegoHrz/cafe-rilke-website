import { ContactForm } from "./components/ContactForm";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu";
import { RilkeContainer } from "./components/RilkeContainer";

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

import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { RilkeContainer } from "./components/RilkeContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className=" lg:container lg:px-20 mx-auto">
        {/* px-[20px] */}
        <Features />
        <Faq />
        <Pricing />
        <Cta />
      </div>
      <RilkeContainer />
      <Footer />
    </>
  );
}

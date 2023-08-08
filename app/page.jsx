import Features from "@/components/home/Features";
import WhyRestoMan from "@/components/home/WhyRestoMan";
import Footer from "@/components/home/Footer";
import Login from "@/components/home/Login";
import Nav from "@/components/home/Nav";
import Pricing from "@/components/home/Pricing";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="!scroll-smooth">
      <Nav />
      <section id="login"> <Login /> </section>
      <section id="why"> <WhyRestoMan /> </section>
      <section id="features"> <Features /> </section>
      <section id="price"> <Pricing /> </section>
      <section id="contsct"> <Contact/> </section>
      <Footer />
    </div>
  );
}

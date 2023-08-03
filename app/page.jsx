import Features from "@/components/home/Features";
import WhyRestoMan from "@/components/home/WhyRestoMan";
import Footer from "@/components/home/Footer";
import Login from "@/components/home/Login";
import Nav from "@/components/home/Nav";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Login/>
      <WhyRestoMan/>
      <Features/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

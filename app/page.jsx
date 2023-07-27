import Features from "@/components/home/Features";
import Features2 from "@/components/home/Features2";
import Footer from "@/components/home/Footer";
import Login from "@/components/home/Login";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <div>
      <Login/>
      <Features/>
      <Features2/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

import Head from "next/head";
import Features from "@/components/home/Features";
import WhyRestoMan from "@/components/home/WhyRestoMan";
import Footer from "@/components/home/Footer";
import Login from "@/components/home/Login";
import Nav from "@/components/home/Nav";
import Pricing from "@/components/home/Pricing";
import Contact from "@/components/home/Contact";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="!scroll-smooth">
      <Head>
        <title>Resto Man.</title>
        <meta name="description" content="Your Digital Restaurant Solution." />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="RestoMan: Restaurant Management System" />
        <meta property="og:description" content="Effortlessly streamline restaurant operations, 
        manage customer insights, and drive growth with RestoMan's intuitive digital solutions." />
        <meta property="og:image" content="/images/logo.png" />
        {/* Add more Open Graph tags as needed */}
      </Head>
      <Nav />
      <section id="login"> <Login /> </section>
      <section id="why"> <WhyRestoMan /> </section>
      <section id="features"> <Features /> </section>
      <section id="price"> <Pricing /> </section>
      <section id="contsct"> <Contact/> </section>
      <Testimonials/>
      <Footer />
    </div>
  );
}

import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Services from "@/components/services";
import Booking from "@/components/booking";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

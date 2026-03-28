import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Products from "@/components/Products";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start w-full">
      <Navbar />
      
      <main className="flex flex-col w-full">
        <Hero />
        <WhatWeDo />
        <Products />
        <Philosophy />
      </main>

      <div className="w-full">
        <Footer />
      </div>

      <ContactModal />
    </div>
  );
}



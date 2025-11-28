import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SocialFloating from "@/components/SocialFloating";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        {/* Hero - Full viewport width */}
        <div className="pt-16">
          <div id="home">
            <Hero />
          </div>
        </div>

        {/* Contenido principal - Con contenedor */}
        <div className="flex flex-1 justify-center pb-8 sm:px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <main>
              <div id="products">
                <ProductGrid />
              </div>
              <div id="about">
                <Story />
                <Testimonials />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <FAQ />
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <SocialFloating />
    </div>
  );
}

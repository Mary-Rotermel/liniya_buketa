import { AboutSeo } from "@/components/AboutSeo";
import { Catalog } from "@/components/Catalog";
import { ContactSection } from "@/components/ContactSection";
import { Delivery } from "@/components/Delivery";
import { FloatingMessengers } from "@/components/FloatingMessengers";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowToOrder } from "@/components/HowToOrder";
import { PopularBouquets } from "@/components/PopularBouquets";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <PopularBouquets />
        <HowToOrder />
        <Delivery />
        <Reviews />
        <AboutSeo />
        <ContactSection />
      </main>
      <FloatingMessengers />
    </>
  );
}

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { Showcase } from "@/components/showcase";
import { FAQ } from "@/components/faq";
import { CallToAction } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <Showcase />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Calculators } from "@/components/tools/Calculators";
import { Converters } from "@/components/tools/Converters";
import { TextTools } from "@/components/tools/TextTools";
import { TimeTools } from "@/components/tools/TimeTools";
import { FAQSection, ContactSection, AdBlock } from "@/components/sections/FAQAndContact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Top Ad Banner */}
        <div className="container mx-auto px-4 pt-24 md:px-6">
          <AdBlock position="top" />
        </div>

        <Hero />

        {/* Content with Sidebar Ad Layout Example */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-20">
              <Calculators />
              <AdBlock position="content" />
              <Converters />
              <TextTools />
              <AdBlock position="content" />
              <TimeTools />
            </div>
            
            <aside className="hidden lg:block space-y-8 sticky top-24 h-fit">
              <AdBlock position="sidebar" />
              <div className="p-6 rounded-2xl border bg-card">
                <h3 className="font-bold mb-4">Trending Tools</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">1</span>
                    EMI Calculator
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">2</span>
                    Unit Converter
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">3</span>
                    Word Counter
                  </li>
                </ul>
              </div>
              <AdBlock position="sidebar" />
            </aside>
          </div>
        </div>

        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

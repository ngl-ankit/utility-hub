"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Calculators } from "@/components/tools/Calculators";
import { Converters } from "@/components/tools/Converters";
import { TextTools } from "@/components/tools/TextTools";
import { TimeTools } from "@/components/tools/TimeTools";
import { FAQSection, ContactSection } from "@/components/sections/FAQAndContact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background/50 selection:bg-primary/20">
      <div className="mesh-bg" />
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-32 pb-32">
              <Calculators />
              <Converters />
              <TextTools />
              <TimeTools />
            </div>
            
            <aside className="hidden lg:block space-y-8 sticky top-32 h-fit pt-8">
              <div className="p-8 rounded-[2rem] border border-white/40 bg-white/30 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-primary/5 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-xl heading-gradient">Trending</h3>
                </div>
                <ul className="space-y-4 text-sm">
                  {[
                    { id: 1, name: "EMI Calculator", href: "#calculators" },
                    { id: 2, name: "Unit Converter", href: "#converters" },
                    { id: 3, name: "Word Counter", href: "#text-tools" },
                    { id: 4, name: "World Clock", href: "#time-date" },
                    { id: 5, name: "GST Calculator", href: "#calculators" },
                  ].map((tool) => (
                    <li key={tool.id} className="group/item">
                      <a 
                        href={tool.href}
                        className="flex items-center gap-3 text-muted-foreground group-hover/item:text-primary transition-all duration-300 translate-x-0 group-hover/item:translate-x-1"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-xl bg-white/50 border border-white/20 text-[10px] font-black text-muted-foreground group-hover/item:bg-primary group-hover/item:text-white group-hover/item:border-primary transition-all shadow-sm">
                          {tool.id}
                        </span>
                        <span className="font-semibold tracking-tight">{tool.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-purple-500/5 backdrop-blur-xl shadow-xl shadow-black/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="font-bold text-lg mb-3 relative z-10 heading-gradient">Pro Privacy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10 font-medium">
                  UtilHub runs entirely client-side. No databases, no tracking, just pure logic in your browser.
                </p>
                <div className="mt-5 relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    <Shield className="h-3 w-3" /> Encrypted
                  </div>
                </div>
              </div>
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

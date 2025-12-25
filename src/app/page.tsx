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
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-20 pb-20">
              <Calculators />
              <Converters />
              <TextTools />
              <TimeTools />
            </div>
            
            <aside className="hidden lg:block space-y-8 sticky top-24 h-fit pt-20">
              <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold mb-4 text-primary">Trending Tools</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { id: 1, name: "EMI Calculator", href: "#calculators" },
                    { id: 2, name: "Unit Converter", href: "#converters" },
                    { id: 3, name: "Word Counter", href: "#text-tools" },
                    { id: 4, name: "World Clock", href: "#time-date" },
                    { id: 5, name: "GST Calculator", href: "#calculators" },
                  ].map((tool) => (
                    <li key={tool.id} className="group">
                      <a 
                        href={tool.href}
                        className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {tool.id}
                        </span>
                        {tool.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border bg-gradient-to-br from-primary/5 to-blue-500/5 backdrop-blur-sm shadow-sm">
                <h3 className="font-bold mb-2">Quick Tip</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All tools work entirely in your browser. No data is sent to our servers, ensuring 100% privacy and lightning-fast speed.
                </p>
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

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe, Cpu } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-10">
          <div className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-xs font-semibold bg-primary/5 backdrop-blur-md shadow-inner text-primary animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            PROFESSIONAL GRADE UTILITIES
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight max-w-5xl font-heading leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            <span className="heading-gradient">Simple Tools for</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-clip-text text-transparent italic">Extraordinary</span> <span className="heading-gradient">Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            A curated suite of <span className="text-foreground font-semibold">privacy-focused</span> web utilities. 
            Fast, elegant, and entirely client-side.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button asChild size="xl" className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 bg-primary text-white">
              <Link href="#calculators">
                Launch Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="h-14 px-10 text-lg rounded-full backdrop-blur-sm hover:bg-white/50 transition-all active:scale-95 border-primary/20">
              <Link href="#faqs">
                Documentation
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-20 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-700">
            {[
              { icon: Zap, title: "Pure Performance", desc: "No server overhead, instant results." },
              { icon: Shield, title: "Zero Data-Mining", desc: "Your data never leaves your browser." },
              { icon: Globe, title: "Open & Accessible", desc: "Free forever, for everyone, everywhere." },
              { icon: Cpu, title: "Modern Engine", desc: "Powered by the latest web technologies." },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-xl hover:bg-white/50 transition-all hover:translate-y-[-4px] shadow-sm hover:shadow-xl group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform shadow-inner">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse [animation-delay:4s]" />
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted/50">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            New Tools Added Weekly
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-3xl">
            Everything You Need, <span className="text-primary">All In One Place</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            UtilHub provides a suite of fast, secure, and user-friendly tools for your daily tasks. 
            No sign-ups, no trackers, just pure utility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-12 px-8 text-base">
              Explore Tools <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              View All Categories
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Processed entirely in your browser.</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold">Privacy First</h3>
              <p className="text-sm text-muted-foreground">Your data never leaves your device.</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-bold">Always Free</h3>
              <p className="text-sm text-muted-foreground">Professional tools at no cost to you.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-7xl h-full blur-3xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full" />
      </div>
    </section>
  );
}

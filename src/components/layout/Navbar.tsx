"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Calculators", href: "#calculators" },
  { name: "Converters", href: "#converters" },
  { name: "Text Tools", href: "#text-tools" },
  { name: "Time & Date", href: "#time-date" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 200;
        }
        return false;
      });
      if (current) {
        setActiveItem(navItems.find(item => item.href === `#${current}`)?.name || "Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full flex justify-center p-4 md:p-6 pointer-events-none">
      <nav className={cn(
        "w-full max-w-7xl pointer-events-auto transition-all duration-500 rounded-3xl",
        scrolled ? "glass py-2 px-6" : "bg-transparent py-4 px-4"
      )}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-2xl tracking-tighter font-heading group">
            <div className="p-2 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <Hammer className="h-5 w-5" />
            </div>
            <span className="heading-gradient">UtilHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-black/5 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold transition-all rounded-xl",
                  activeItem === item.name 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                )}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </div>

            <div className="flex items-center gap-3">
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-2xl glass" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 rounded-3xl glass border shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-base font-semibold transition-all rounded-2xl",
                    activeItem === item.name ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:bg-black/5"
                  )}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveItem(item.name);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-2 rounded-2xl h-12 text-lg font-bold">
                Get Pro
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

import Link from "next/link";
import { Hammer, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
              <Hammer className="h-6 w-6 text-primary" />
              <span>UtilHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your all-in-one hub for daily productivity tools. Fast, free, and secure.
            </p>
            <div className="flex gap-4">
              <Github className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
              <Twitter className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
              <Linkedin className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li><Link href="#calculators" className="hover:text-primary">Calculators</Link></li>
              <li><Link href="#converters" className="hover:text-primary">Converters</Link></li>
              <li><Link href="#text-tools" className="hover:text-primary">Text Tools</Link></li>
              <li><Link href="#time-date" className="hover:text-primary">Time & Date</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe for updates on new tools and features.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} UtilHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function FAQSection() {
  const faqs = [
    {
      q: "Are these tools free to use?",
      a: "Yes, all tools on UtilHub are 100% free and will always remain so. We support the platform through non-intrusive advertisements."
    },
    {
      q: "Is my data safe?",
      a: "Absolutely. All processing happens locally in your browser. We do not store or transmit any of your input data to our servers."
    },
    {
      q: "Do I need to create an account?",
      a: "No registration is required. You can start using any tool immediately without any sign-up process."
    },
    {
      q: "How accurate are the calculators?",
      a: "Our calculators use standard mathematical formulas and are highly accurate. However, for critical financial or medical decisions, we recommend consulting a professional."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Everything you need to know about UtilHub and how our tools work.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Have a suggestion for a new tool? Found a bug? We'd love to hear from you. 
              Our team typically responds within 24-48 hours.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span>support@utilhub.io</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>Remote First, Global Team</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-2xl border p-8 shadow-sm">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdBlock({ position }: { position: "top" | "sidebar" | "content" }) {
  const styles = {
    top: "w-full h-[90px] mb-8",
    sidebar: "w-full h-[600px]",
    content: "w-full h-[250px] my-8"
  };

  return (
    <div className={`${styles[position]} bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center overflow-hidden`}>
      <div className="text-center">
        <p className="text-xs font-semibold text-muted-foreground/40 uppercase tracking-widest mb-1">Advertisement</p>
        <div className="text-[10px] text-muted-foreground/30">Google AdSense Placement</div>
      </div>
    </div>
  );
}

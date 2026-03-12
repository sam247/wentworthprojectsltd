import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  title?: string;
  subtitle?: string;
}

export default function SectionCTA({
  title = "Ready to Transform Your Space?",
  subtitle =
    "Get in touch with our team to discuss your next commercial fit out or refurbishment project.",
}: SectionCTAProps) {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-primary-foreground/70 text-lg mb-8">{subtitle}</p>
        <Button
          asChild
          size="lg"
          className="bg-background text-foreground hover:bg-background/90 font-semibold text-base px-8"
        >
          <Link href="/contact">
            Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

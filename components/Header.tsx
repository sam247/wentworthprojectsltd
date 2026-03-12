"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Shop Fit Outs", path: "/services/shop-fit-outs" },
  { label: "Office Refurbishments", path: "/services/office-refurbishments" },
  { label: "Commercial Interiors", path: "/services/commercial-interiors" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/wentworthlogo.webp"
            alt="Wentworth Projects"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                pathname === link.path ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-foreground text-background hover:bg-foreground/90 font-semibold">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-3 text-sm font-medium rounded-md transition-colors hover:bg-secondary ${
                  pathname === link.path ? "text-accent bg-secondary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-foreground text-background hover:bg-foreground/90 font-semibold">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Request a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

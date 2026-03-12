import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/wentworthlogo.webp"
              alt="Wentworth Projects"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Premium commercial fit outs and refurbishments. Transforming
              spaces across retail, hospitality, office, and commercial
              sectors.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="/services/shop-fit-outs"
                  className="hover:text-accent transition-colors"
                >
                  Shop Fit Outs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/office-refurbishments"
                  className="hover:text-accent transition-colors"
                >
                  Office Refurbishments
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hospitality-fit-outs"
                  className="hover:text-accent transition-colors"
                >
                  Hospitality Fit Outs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial-interiors"
                  className="hover:text-accent transition-colors"
                >
                  Commercial Interiors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>020 7946 0123</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@wentworthprojects.co.uk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>
                  27 Old Gloucester Street
                  <br />
                  London WC1N 3AX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Wentworth Projects. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

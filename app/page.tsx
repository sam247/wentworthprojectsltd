"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Store,
  Building2,
  UtensilsCrossed,
  Landmark,
  ShoppingBag,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  services,
  projects,
  testimonials,
  processSteps,
  stats,
  industries,
} from "@/lib/siteData";
import SectionCTA from "@/components/SectionCTA";

const iconMap: Record<string, React.ReactNode> = {
  Store: <Store className="h-8 w-8" />,
  Building2: <Building2 className="h-8 w-8" />,
  UtensilsCrossed: <UtensilsCrossed className="h-8 w-8" />,
  Landmark: <Landmark className="h-8 w-8" />,
  ShoppingBag: <ShoppingBag className="h-8 w-8" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/hero-video.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-background">
                Wentworth Projects Transform Commercial Spaces
              </h1>
              <p className="text-lg md:text-xl text-background/70 mb-10 max-w-2xl leading-relaxed">
                Expert shop fit outs, office refurbishments, and commercial
                interiors. We deliver premium construction solutions for
                businesses across London and the South East.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-semibold text-base px-8"
                >
                  <Link href="/contact">
                    Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-foreground bg-background/20 hover:bg-background/30 font-semibold text-base px-8"
                >
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-background/95 backdrop-blur rounded-lg p-8 shadow-2xl">
                <h3 className="font-sans text-lg font-semibold text-foreground mb-1">
                  Get a Free Quote
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Tell us about your project and we&apos;ll be in touch within 24
                  hours.
                </p>
                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Project Type</option>
                    <option>Shop Fit Out</option>
                    <option>Office Refurbishment</option>
                    <option>Restaurant & Hospitality</option>
                    <option>Commercial Interior</option>
                  </select>
                  <Button
                    type="submit"
                    className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold"
                  >
                    Get Your Free Quote
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-secondary border-b border-border">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg">
              End-to-end commercial fit out and refurbishment services tailored
              to your industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={`/services/${service.id}`}>
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
                    <CardContent className="p-8">
                      <div className="text-accent mb-4">
                        {iconMap[service.icon]}
                      </div>
                      <h3 className="font-sans text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center text-accent text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore some of our latest commercial fit out and refurbishment
              projects.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={`/projects/${project.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {project.sector}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          • {project.location}
                        </span>
                      </div>
                      <h3 className="font-sans text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg">
              A proven approach to delivering exceptional commercial spaces, on
              time and on budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >
                <div className="text-5xl font-bold text-accent/20 mb-3 font-display">
                  0{step.step}
                </div>
                <h3 className="font-sans text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Sectors
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="text-center p-8 hover:shadow-md transition-all border-border">
                  <div className="text-accent mb-3 flex justify-center">
                    {iconMap[industry.icon]}
                  </div>
                  <h3 className="font-sans font-semibold">{industry.name}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-border">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-accent/30 mb-4" />
                    <p className="text-foreground leading-relaxed mb-6 italic">
                      &quot;{t.quote}&quot;
                    </p>
                    <div>
                      <div className="font-sans font-semibold text-sm">
                        {t.author}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}

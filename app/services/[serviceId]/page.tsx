"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  services,
  projects,
  processSteps,
} from "@/lib/siteData";
import SectionCTA from "@/components/SectionCTA";
import { notFound } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ServicePage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  const service = services.find((s) => s.id === serviceId);

  if (!service) notFound();

  const relatedProjects = projects
    .filter((p) =>
      p.type
        .toLowerCase()
        .includes(service.title.toLowerCase().split(" ")[0])
    )
    .slice(0, 3);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Deliver</h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.industries.map((ind, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <Card className="border-border">
                      <CardContent className="p-4 font-medium text-sm">
                        {ind}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
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

      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10">Related Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link href={`/projects/${project.id}`}>
                    <Card className="group overflow-hidden hover:shadow-lg transition-all border-border">
                      <div className="aspect-[4/3] bg-muted">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {project.sector}
                        </span>
                        <h3 className="font-sans text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2">
                          {project.shortDescription}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <SectionCTA />
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/siteData";
import SectionCTA from "@/components/SectionCTA";

const sectors = ["All", "Retail", "Office", "Hospitality", "Commercial"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.sector === filter);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Browse our portfolio of completed commercial fit outs and
              refurbishments across London.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-10">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === s
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-border"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
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
                      <p className="text-muted-foreground text-sm">
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

      <SectionCTA />
    </>
  );
}

"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import { projects } from "@/lib/siteData";
import SectionCTA from "@/components/SectionCTA";
import { notFound } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const project = projects.find((p) => p.id === projectId);

  if (!project) notFound();

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-accent text-sm font-medium mb-6 hover:gap-2 transition-all"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Projects
            </Link>
            <span className="block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {project.sector} • {project.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <MapPin className="h-4 w-4" /> {project.location}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-12">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.shortDescription}
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-sans font-semibold mb-3">Project Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Sector</dt>
                  <dd className="font-medium">{project.sector}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Type</dt>
                  <dd className="font-medium">{project.type}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium">{project.location}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Scope of Work</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.scope}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-12">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-[4/3] bg-muted rounded-lg overflow-hidden"
              >
                <img
                  src="/placeholder.svg"
                  alt={`${project.name} gallery ${n}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}

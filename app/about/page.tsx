"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionCTA from "@/components/SectionCTA";

const values = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Quality Craftsmanship",
    desc: "We never compromise on quality. Every project is delivered to the highest standard of workmanship.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "On Time Delivery",
    desc: "We understand that time is money. Our proven project management ensures deadlines are met.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client Focused",
    desc: "Your vision drives everything we do. We listen, collaborate, and deliver spaces you're proud of.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safety First",
    desc: "We maintain rigorous safety standards across all our sites, protecting our people and yours.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function AboutPage() {
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
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Excellence Since 2010
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Wentworth Projects is a leading commercial fit out and
              refurbishment company with over 15 years of experience delivering
              premium construction solutions across London and the South East.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wentworth Projects was founded with a clear mission: to
                  deliver exceptional commercial spaces that help businesses
                  thrive. From our early days fitting out boutique retail stores,
                  we&apos;ve grown into one of London&apos;s most trusted commercial
                  fit out companies.
                </p>
                <p>
                  Our team of experienced project managers, designers, and
                  construction professionals bring a wealth of knowledge across
                  retail, hospitality, office, and commercial sectors. We take
                  pride in our ability to manage complex projects from concept
                  through to completion.
                </p>
                <p>
                  What sets us apart is our commitment to understanding each
                  client&apos;s unique needs and delivering tailored solutions that
                  exceed expectations — on time and on budget.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Wentworth Projects team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Wentworth
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-border">
                  <CardContent className="p-8">
                    <div className="text-accent mb-4">{v.icon}</div>
                    <h3 className="font-sans text-lg font-semibold mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
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

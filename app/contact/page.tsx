"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Enquiry Submitted",
        description:
          "Thank you! Our team will be in touch within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

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
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Quote
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Tell us about your project and we&apos;ll provide a detailed quote
              within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Project Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Full Name *
                    </label>
                    <Input required placeholder="Your name" maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Company
                    </label>
                    <Input placeholder="Company name" maxLength={100} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="you@company.com"
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="020 7946 0123"
                      maxLength={20}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Project Type *
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shop-fit-out">
                          Shop Fit Out
                        </SelectItem>
                        <SelectItem value="office-refurbishment">
                          Office Refurbishment
                        </SelectItem>
                        <SelectItem value="hospitality">
                          Hospitality Fit Out
                        </SelectItem>
                        <SelectItem value="commercial-interior">
                          Commercial Interior
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Budget Range
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under £50,000</SelectItem>
                        <SelectItem value="50-100k">
                          £50,000 – £100,000
                        </SelectItem>
                        <SelectItem value="100-250k">
                          £100,000 – £250,000
                        </SelectItem>
                        <SelectItem value="250-500k">
                          £250,000 – £500,000
                        </SelectItem>
                        <SelectItem value="500k-plus">£500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Timeline
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-3months">1 – 3 months</SelectItem>
                        <SelectItem value="3-6months">3 – 6 months</SelectItem>
                        <SelectItem value="6-12months">6 – 12 months</SelectItem>
                        <SelectItem value="planning">Just planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Project Details
                  </label>
                  <Textarea
                    placeholder="Tell us about your project — location, size, requirements, and any other details."
                    rows={5}
                    maxLength={2000}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}{" "}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Details</h2>
              <div className="space-y-4">
                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Phone className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Phone</div>
                      <div className="text-muted-foreground text-sm">
                        020 7946 0123
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Mail className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Email</div>
                      <div className="text-muted-foreground text-sm">
                        info@wentworthprojects.co.uk
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Office</div>
                      <div className="text-muted-foreground text-sm">
                        27 Old Gloucester Street
                        <br />
                        London WC1N 3AX
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50 px-5 md:px-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate full-stack developer with expertise in modern
                web technologies. My journey in software development started
                with a curiosity about how things work on the internet, which
                led me to dive deep into web development.
              </p>
              <p>
                I specialize in building robust and scalable applications using
                React, Next.js, and various backend technologies. My approach
                combines clean code practices with innovative problem-solving to
                create exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/CV/Amanullah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Download CV
              </a>
              <Button
                variant="outline"
                className="group hover:border-primary transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL || "/aboutS.jpg"}`}
              alt="Profile"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

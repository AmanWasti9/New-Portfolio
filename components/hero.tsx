"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import TechSymbol from "./tech-symbol";
import { AnimatedBackground } from "./animated-background";
import "../styles/animation.css";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden px-5 md:px-16">
      <AnimatedBackground />
      <TechSymbol />
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10">
        {" "}
        {/* Set background layers with z-index -10 */}
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center md:text-left max-w-3xl mx-auto md:mx-0"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-lg font-mono"
            >
              {"<hello world />"}
            </motion.p>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Syed Amanullah Wasti
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground h-[60px] font-mono">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Aspiring AI Engineer",
                  2000,
                  "Backend Specialist",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Crafting exceptional digital experiences through innovative
            technology and elegant design, transforming complex challenges into
            seamless solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="group relative overflow-hidden">
              <a href="#projects" className="relative z-10">
                View Projects
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group hover:border-primary transition-colors"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            {[
              {
                icon: Github,
                href: "https://github.com/AmanWasti9",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/aman-wasti/",
                label: "LinkedIn",
              },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="relative overflow-hidden group"
                asChild
              >
                <Link href={href} target="_blank">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <Link href="#about">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

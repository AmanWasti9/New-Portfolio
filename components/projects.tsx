"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "NeXoCard - AI Flashcard Generator",
    description:
      "Learn Smarter, Retain Better: AI-Powered Flashcards and Study Tools.",
    image: "/NexoCardWeb.png",
    tags: [
      "React JS",
      "Material-UI",
      "Three JS",
      "Firebase",
      "Gemini AI",
      "LangChain",
      "Generative AI",
    ],
    metrics: {
      users: "500+",
      flashcardsGenerated: "10K+",
      leaderboardEntries: "200+",
      averageResponseTime: "> 2 Seconds",
      quizCompletionRate: "75%",
    },
    links: {
      github: "https://github.com/AmanWasti9/AI-FlashCard",
      live: "https://ai-flash-card.vercel.app/",
    },
  },

  {
    title: "Pacer - Your Go-To Sneaker Store",
    description:
      "A sleek and intuitive online sneaker store built with React JS, offering a smooth browsing experience with detailed product listings and a single-click purchase feature.",
    image: "/sneakerWeb.png",
    tags: ["React JS", "Material UI", "JavaScript", "CSS", "Material Icons"],
    metrics: {
      sneakersListed: "200+",
      users: "500+",
      dailyInteractions: "100+",
      categories: "5+",
    },
    links: {
      github: "https://github.com/AmanWasti9/shoe-store",
      live: "https://sneaker-store-pi.vercel.app/",
    },
  },

  {
    title: "COVID-19 Tracker - Real-Time Global COVID-19 Data Visualization",
    description:
      "A real-time COVID-19 tracker that displays global statistics with interactive donut charts, offering insights into the pandemic's impact by country.",
    image: "/covidtrack.png",
    tags: [
      "React JS",
      "Material UI",
      "COVID-19 API ",
      "JavaScript",
      "CSS",
      "Chart JS",
    ],
    metrics: {
      countriesTracked: "190+",
      dataUpdated: "Every Hour",
      users: "500+",
      chartsRendered: "200+",
    },
    links: {
      github: "https://github.com/AmanWasti9/COVID-Tracker-React",
      live: "https://covid19-tracker-orpin-sigma.vercel.app/",
    },
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative px-5 md:px-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing my expertise in building scalable, user-friendly
              applications with modern technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden h-full border-primary/20 backdrop-blur-sm bg-card/50">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 text-xl">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-primary font-bold">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key
                              .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
                              .split(" ") // Split into words
                              .map((word, index, array) => (
                                <span key={index}>
                                  {word}
                                  {index === 1 && <br />}{" "}
                                  {/* Add line break only after the second word */}
                                  {index !== array.length - 1 && " "}{" "}
                                  {/* Add space between words except the last one */}
                                </span>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href={project.links.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="w-full" asChild>
                      <Link href={project.links.live} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-12">
        <Link href="/projects">
          <Button size="lg">View More</Button>
        </Link>
      </div>
    </section>
  );
}

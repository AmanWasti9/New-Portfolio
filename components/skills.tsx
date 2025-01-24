"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Progress } from "./ui/progress";
import { useRef } from "react";
import { Card } from "./ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML/CSS", progress: 95, years: 4 },
      { name: "React/Next.js", progress: 90, years: 2 },
      { name: "JavaScript", progress: 85, years: 3 },
      { name: "React Native", progress: 80, years: 1 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js/Express", progress: 55, years: 1 },
      { name: "Java/Spring Boot", progress: 70, years: 2 },
      { name: "SQL/NoSQL", progress: 75, years: 2 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Firebase/Firestore", progress: 80, years: 1 },
      { name: "Git/GitHub", progress: 75, years: 2 },
      { name: "CI/CD", progress: 85, years: 2 },
      { name: "Vercel", progress: 90, years: 2 },
    ],
  },
];

const metrics = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Github Contributions", value: "260+" },
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden px-5 md:px-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build scalable, efficient,
              and user-friendly applications.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card border"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <Card className="p-6 space-y-6 h-full backdrop-blur-sm bg-card/50">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          delay: (categoryIndex * 4 + skillIndex) * 0.1,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between text-sm">
                          <span className="flex items-center gap-2">
                            {skill.name}
                            <span className="text-xs text-muted-foreground">
                              ({skill.years} years)
                            </span>
                          </span>
                          <span>{skill.progress}%</span>
                        </div>
                        <Progress
                          value={skill.progress}
                          className="h-2"
                          // indicatorClassName="bg-gradient-to-r from-primary to-primary/50"
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

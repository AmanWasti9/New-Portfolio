"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-primary">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-primary"></div>
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </main>
  );
}

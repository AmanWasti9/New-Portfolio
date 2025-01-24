import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/all-projects";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <main className="py-20 px-16">
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;

import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

// Add the Page type for Next.js 13+ App Router
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
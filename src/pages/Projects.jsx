import { useState } from "react";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-[calc(72px+48px)]">
      <div className="container pb-24">
        <Reveal className="mb-10 max-w-2xl">
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-3 text-4xl md:text-5xl">Things I&apos;ve built</h1>
          <p className="mt-4 text-muted-foreground">
            A selection of projects spanning cross-platform mobile apps, full-stack
            web platforms and interactive 3D experiences. Click any project to read
            the details.
          </p>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-sm transition-all duration-200",
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-panel text-muted-foreground hover:border-border/80 hover:text-white"
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

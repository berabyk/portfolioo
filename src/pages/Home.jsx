import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Download, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, socials } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { useTypewriter } from "@/hooks/useTypewriter";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import photo from "@/Assets/cvfoto.webp";
import cv from "@/Assets/Bera_Biyik_CV.pdf";

export default function Home() {
  const typed = useTypewriter(profile.roles);
  const marquee = skillGroups.flatMap((g) => g.items);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="pb-16 pt-[calc(72px+clamp(40px,8vw,88px))] md:pb-24">
        <div className="container grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            {profile.available && (
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
                <span className="h-2 w-2 animate-pulse-ring rounded-full bg-emerald-400 shadow-[0_0_0_0_rgba(74,222,128,0.6)]" />
                {profile.availableText}
              </span>
            )}
            <p className="eyebrow mb-4">Software Developer · {profile.location}</p>
            <h1 className="text-[clamp(2.6rem,7vw,4.6rem)] leading-[1.02]">
              I&apos;m Bera <span className="gradient-text">Bıyık</span>
            </h1>
            <div className="mb-6 mt-4 min-h-[1.6em] font-mono text-[clamp(1rem,2.4vw,1.35rem)] text-foreground">
              <span className="mr-2 text-primary">&gt;</span>
              {typed}
              <span className="type-caret" />
            </div>
            <p className="mb-8 max-w-[34rem] text-lg text-muted-foreground">
              {profile.tagline}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/projects">
                  View my work <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={cv} target="_blank" rel="noreferrer">
                  <Download /> Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-2.5">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="grid h-11 w-11 place-items-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Profile visual */}
          <Reveal delay={120} className="order-first flex justify-center md:order-none">
            <div className="relative w-[min(360px,80%)] rounded-[26px] border border-border bg-gradient-to-b from-panel-soft to-panel p-3.5 shadow-[0_40px_80px_-40px_#000] ring-1 ring-primary/10">
              <img
                src={photo}
                alt={profile.name}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="flex items-center justify-between px-1.5 pb-1 pt-3.5">
                <span className="font-display font-semibold text-white">{profile.name}</span>
                <span className="font-mono text-xs text-muted-foreground">Flutter · Web</span>
              </div>
              <div className="absolute -right-3.5 bottom-5 flex items-center gap-2 rounded-md border border-border bg-panel-soft px-3 py-2 font-mono text-xs text-foreground shadow-[0_20px_40px_-20px_#000]">
                <Code2 size={15} className="text-primary" /> open to work
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="container mt-14 md:mt-16">
          <Reveal className="grid grid-cols-1 overflow-hidden rounded-xl border border-border sm:grid-cols-3">
            {profile.stats.map((s, i) => (
              <div
                key={s.label}
                className={`bg-background/40 p-6 ${i > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}
              >
                <div className="font-display text-[clamp(1.6rem,3.5vw,2.2rem)] text-white">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- FEATURED WORK ---------------- */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="mt-3 text-3xl md:text-5xl">Featured projects</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-all hover:gap-2.5 hover:text-white"
            >
              All projects <ArrowUpRight size={18} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TECH STRIP ---------------- */}
      <section className="pb-24">
        <div className="container">
          <Reveal className="mb-8">
            <span className="eyebrow">Toolbox</span>
            <h2 className="mt-3 text-3xl md:text-5xl">Technologies I work with</h2>
          </Reveal>
          <Reveal className="flex flex-wrap gap-2.5">
            {marquee.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3.5 py-2 text-sm text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-white"
              >
                <t.icon className="text-base text-primary" /> {t.name}
              </span>
            ))}
          </Reveal>
          <Reveal className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-all hover:gap-2.5 hover:text-white"
            >
              More about me <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

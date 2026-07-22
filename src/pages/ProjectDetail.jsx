import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Calendar,
  User,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects, getProject } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/404" replace />;

  const {
    title,
    tagline,
    category,
    year,
    role,
    cover,
    stack = [],
    links = {},
    overview = [],
    highlights = [],
    gallery = [],
    series,
  } = project;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="pt-[calc(72px+48px)]">
      <div className="container pb-24">
        <Reveal>
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all hover:gap-2.5 hover:text-white"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal className="mb-10">
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-muted-foreground">
            <span>{category}</span>
            <span className="text-border">/</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {year}
            </span>
            <span className="text-border">/</span>
            <span className="inline-flex items-center gap-1.5">
              <User size={14} /> {role}
            </span>
            {series && (
              <>
                <span className="text-border">/</span>
                <span>{series} series</span>
              </>
            )}
          </div>
          <h1 className="mb-3 text-[clamp(2.1rem,5vw,3.4rem)]">{title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{tagline}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {links.demo && (
              <Button asChild>
                <a href={links.demo} target="_blank" rel="noreferrer">
                  <ExternalLink /> Live demo
                </a>
              </Button>
            )}
            {links.github && (
              <Button asChild variant="outline">
                <a href={links.github} target="_blank" rel="noreferrer">
                  <Github /> Source code
                </a>
              </Button>
            )}
          </div>
        </Reveal>

        {/* Cover */}
        <Reveal
          delay={80}
          className="mb-12 overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_50%_30%,hsl(var(--panel-soft)),hsl(var(--background)))]"
        >
          <img src={cover} alt={title} className="mx-auto max-h-[520px] w-full object-contain" />
        </Reveal>

        {/* Body */}
        <div className="grid items-start gap-10 md:grid-cols-[1.6fr_0.9fr] lg:gap-16">
          <div>
            <Reveal className="mb-10">
              <h2 className="mb-4 text-2xl">Overview</h2>
              {overview.map((p, i) => (
                <p key={i} className="mb-4 text-muted-foreground">
                  {p}
                </p>
              ))}
            </Reveal>

            {highlights.length > 0 && (
              <Reveal className="mb-10">
                <h2 className="mb-4 text-2xl">Highlights</h2>
                <ul className="grid gap-3">
                  {highlights.map((h) => (
                    <li key={h} className="relative pl-7 text-muted-foreground">
                      <span className="absolute left-0 text-primary">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          {/* Sticky info card */}
          <Reveal delay={120}>
            <Card className="panel sticky top-[96px] grid gap-6 p-7">
              <div>
                <h4 className="mb-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  <Layers size={13} /> Tech stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Role
                </h4>
                <p className="text-foreground">{role}</p>
              </div>

              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Year
                </h4>
                <p className="text-foreground">{year}</p>
              </div>

              {(links.demo || links.github) && (
                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    Links
                  </h4>
                  <div className="grid gap-2.5">
                    {links.demo && (
                      <Button asChild variant="outline" size="sm" className="w-full justify-start">
                        <a href={links.demo} target="_blank" rel="noreferrer">
                          <ExternalLink /> Visit live site
                        </a>
                      </Button>
                    )}
                    {links.github && (
                      <Button asChild variant="outline" size="sm" className="w-full justify-start">
                        <a href={links.github} target="_blank" rel="noreferrer">
                          <Github /> View on GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </Card>
          </Reveal>
        </div>

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {gallery.map((src, i) => (
              <Reveal key={i} delay={i * 70}>
                <img
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  className="w-full rounded-xl border border-border"
                />
              </Reveal>
            ))}
          </div>
        )}

        {/* Next project */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <div>
            <div className="font-mono text-xs text-muted-foreground">Next project</div>
            <Link
              to={`/projects/${next.slug}`}
              className="mt-1 inline-flex items-center gap-2 font-display text-2xl text-white transition-all hover:gap-3.5 hover:text-primary"
            >
              {next.title} <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

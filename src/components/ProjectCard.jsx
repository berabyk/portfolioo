import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }) {
  const { slug, title, category, year, cover, summary, links = {} } = project;

  return (
    <Card className="group relative flex flex-col overflow-hidden panel transition-all duration-300 hover:-translate-y-1.5 hover:border-border/80 hover:shadow-[0_30px_60px_-35px_#000]">
      {/* whole-card link */}
      <Link to={`/projects/${slug}`} className="absolute inset-0 z-10" aria-label={title} />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-[radial-gradient(circle_at_50%_40%,hsl(var(--panel-soft)),hsl(var(--background)))]">
        <img
          src={cover}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          variant="outline"
          className="absolute left-3 top-3 border-border bg-background/70 text-foreground backdrop-blur"
        >
          {category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <span className="font-mono text-xs text-muted-foreground">{year}</span>
        </div>
        <p className="flex-1 text-sm text-muted-foreground">{summary}</p>

        <div className="mt-1 flex items-center justify-between gap-4 border-t border-border pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
            View details <ArrowUpRight size={16} />
          </span>
          <div className="relative z-20 flex gap-2">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} on GitHub`}
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-white"
              >
                <Github size={16} />
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} live demo`}
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-white"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

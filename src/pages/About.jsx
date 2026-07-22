import GitHubCalendar from "react-github-calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { about, profile } from "@/data/profile";
import { skillGroups, tools } from "@/data/skills";
import Reveal from "@/components/Reveal";
import ErrorBoundary from "@/components/ErrorBoundary";
import photo from "@/Assets/cvfoto.webp";

export default function About() {
  return (
    <div className="pt-[calc(72px+48px)]">
      <div className="container pb-24">
        <Reveal className="mb-12">
          <span className="eyebrow">About me</span>
          <h1 className="mt-3 text-4xl md:text-5xl">Know who I am</h1>
        </Reveal>

        {/* Intro */}
        <div className="mb-16 grid items-center gap-10 md:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-muted-foreground">
                {p}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap gap-10">
              <div>
                <h4 className="mb-3.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Focus areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {about.focus.map((f) => (
                    <Badge key={f} variant="outline">
                      {f}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Currently learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {about.learning.map((l) => (
                    <Badge key={l} variant="outline">
                      {l}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mx-auto w-full max-w-[320px]">
            <div className="overflow-hidden rounded-2xl border border-border bg-panel">
              <img src={photo} alt={profile.name} className="w-full" />
            </div>
          </Reveal>
        </div>

        {/* Skills */}
        <section className="mb-16">
          <Reveal className="mb-10">
            <span className="eyebrow">Skillset</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Professional skills</h2>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 70}>
                <Card className="panel h-full p-6">
                  <h4 className="mb-5 font-display text-lg text-white">{group.title}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map(({ name, icon: Icon }) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-white"
                      >
                        <Icon className="text-base text-primary" /> {name}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <Reveal className="mb-8">
            <span className="eyebrow">Environment</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Tools I use</h2>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3">
            {tools.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-panel px-4 py-3 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-border/80 hover:text-white"
              >
                <Icon className="text-xl text-primary" /> {name}
              </span>
            ))}
          </Reveal>
        </section>

        {/* GitHub activity */}
        <section>
          <Reveal className="mb-8">
            <span className="eyebrow">Consistency</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Days I code</h2>
          </Reveal>
          <ErrorBoundary
            fallback={
              <Card className="panel github-cal p-7">
                <p className="m-0 text-center text-muted-foreground">
                  Contribution graph is unavailable right now — check out{" "}
                  <a
                    className="text-primary hover:underline"
                    href={`https://github.com/${profile.githubUsername}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{profile.githubUsername}
                  </a>{" "}
                  on GitHub.
                </p>
              </Card>
            }
          >
            <Reveal>
              <Card className="panel github-cal overflow-x-auto p-7 text-muted-foreground">
                <GitHubCalendar
                  username={profile.githubUsername}
                  blockSize={13}
                  blockMargin={4}
                  fontSize={14}
                  colorScheme="dark"
                  theme={{
                    light: ["#ebedf0", "#c6cbe0", "#8b9ad6", "#5b73c4", "#3a4f96"],
                    dark: ["#161a21", "#2a3350", "#3f4f86", "#5b73c4", "#7089d9"],
                  }}
                  throwOnError={false}
                  errorMessage="Contribution graph is unavailable right now."
                />
              </Card>
            </Reveal>
          </ErrorBoundary>
        </section>
      </div>
    </div>
  );
}

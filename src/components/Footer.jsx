import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, socials } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border bg-gradient-to-b from-transparent to-primary/[0.04]">
      <div className="container py-16 text-center md:py-24">
        <span className="eyebrow justify-center">What&apos;s next</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Let&apos;s build something together</h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          I&apos;m always open to discussing new projects, opportunities, or just
          talking tech. Feel free to reach out — my inbox is always open.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href={`mailto:${profile.email}`}>
            <Mail /> Say hello
          </a>
        </Button>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-7">
          <span className="text-sm text-muted-foreground">
            © {year} {profile.name}. Built with{" "}
            <span className="text-primary">React</span> &amp; Vite.
          </span>
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
      </div>
    </footer>
  );
}

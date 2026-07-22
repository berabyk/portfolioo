import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    cn(
      "relative rounded-md px-3 py-2 text-sm transition-colors",
      isActive ? "text-white" : "text-muted-foreground hover:text-white"
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[72px] border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/70 shadow-[0_10px_30px_-20px_#000] backdrop-blur-xl"
          : "border-transparent"
      )}
    >
      <div className="container flex h-full items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-[11px] border border-border bg-gradient-to-br from-panel-soft to-panel font-mono text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            {profile.initials}
          </span>
          <span className="font-display text-[1.05rem] font-semibold">
            Bera <span className="text-muted-foreground">Bıyık</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 bottom-1 h-0.5 rounded bg-primary" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Button asChild variant="outline" size="sm" className="ml-2">
            <a href={`mailto:${profile.email}`}>
              <Mail /> Contact
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-border text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="absolute inset-x-0 top-[72px] flex flex-col gap-1 border-b border-border bg-background/95 px-6 pb-6 pt-3 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-2 py-3 text-base transition-colors",
                  isActive
                    ? "bg-primary/10 text-white"
                    : "text-muted-foreground hover:text-white"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild variant="outline" size="sm" className="mt-2 w-full">
            <a href={`mailto:${profile.email}`}>
              <Mail /> Contact
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}

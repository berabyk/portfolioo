import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[80vh] flex-col items-center justify-center gap-5 pt-[72px] text-center">
      <div className="gradient-text font-display text-[clamp(5rem,18vw,10rem)] leading-none">
        404
      </div>
      <h1 className="text-3xl md:text-4xl">Page not found</h1>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild>
        <Link to="/">
          <ArrowLeft /> Back home
        </Link>
      </Button>
    </div>
  );
}

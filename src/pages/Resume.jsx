import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import cv from "@/Assets/Bera_Biyik_CV.pdf";

export default function Resume() {
  return (
    <div className="pt-[calc(72px+48px)]">
      <div className="container pb-24">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Curriculum vitae</span>
            <h1 className="mt-3 text-4xl md:text-5xl">My résumé</h1>
          </div>
          <Button asChild>
            <a href={cv} download>
              <Download /> Download CV
            </a>
          </Button>
        </Reveal>

        <Reveal className="overflow-hidden rounded-2xl border border-border bg-panel shadow-[0_40px_80px_-50px_#000]">
          <object
            data={`${cv}#view=FitH`}
            type="application/pdf"
            aria-label="Résumé PDF"
            className="block h-[min(88vh,1100px)] w-full"
          >
            <div className="p-12 text-center text-muted-foreground">
              <p>
                Your browser can&apos;t display the embedded PDF.{" "}
                <a className="text-primary hover:underline" href={cv} target="_blank" rel="noreferrer">
                  Open it in a new tab
                </a>{" "}
                instead.
              </p>
            </div>
          </object>
        </Reveal>

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <a href={cv} download>
              <Download /> Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

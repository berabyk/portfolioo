import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import staticCv from "@/Assets/Bera_Biyik_CV.pdf";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Resume() {
  const [cvUrl, setCvUrl] = useState(staticCv);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPublishedCv() {
      if (!db) {
         setLoading(false);
         return;
      }
      try {
        const docRef = doc(db, "settings", "publishedResume");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().url) {
          setCvUrl(docSnap.data().url);
        }
      } catch (error) {
        console.error("Error fetching published CV:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPublishedCv();
  }, []);

  if (loading) {
    return <div className="pt-[calc(72px+48px)] container pb-24 text-center">Loading...</div>;
  }

  return (
    <div className="pt-[calc(72px+48px)]">
      <div className="container pb-24">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Curriculum vitae</span>
            <h1 className="mt-3 text-4xl md:text-5xl">My résumé</h1>
          </div>
          <Button asChild>
            <a href={cvUrl} download target="_blank" rel="noreferrer">
              <Download /> Download CV
            </a>
          </Button>
        </Reveal>

        <Reveal className="overflow-hidden rounded-2xl border border-border bg-panel shadow-[0_40px_80px_-50px_#000]">
          <object
            data={`${cvUrl}#view=FitH`}
            type="application/pdf"
            aria-label="Résumé PDF"
            className="block h-[min(88vh,1100px)] w-full"
          >
            <div className="p-12 text-center text-muted-foreground">
              <p>
                Your browser can&apos;t display the embedded PDF.{" "}
                <a className="text-primary hover:underline" href={cvUrl} target="_blank" rel="noreferrer">
                  Open it in a new tab
                </a>{" "}
                instead.
              </p>
            </div>
          </object>
        </Reveal>

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <a href={cvUrl} download target="_blank" rel="noreferrer">
              <Download /> Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

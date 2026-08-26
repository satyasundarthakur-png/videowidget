import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const TITLE = "ffmpeg webCLI — Browser Video & Audio Toolkit";
const DESCRIPTION =
  "Run ffmpeg commands entirely in your browser. Convert, trim, and transcode video and audio locally with no uploads and no servers.";
const URL = "https://videowidget.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://videowidget.lovable.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://videowidget.lovable.app/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ffmpeg webCLI",
          description: DESCRIPTION,
          url: URL,
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Any",
          browserRequirements: "Requires a modern browser with WebAssembly support",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          featureList: [
            "Convert video and audio formats in the browser",
            "Trim and cut clips on a film-strip timeline",
            "Transcode with ffmpeg.wasm locally — no uploads",
            "Works offline as an installable web app",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace("/app/index.html");
    }, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-foreground">{TITLE}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          A cinematic, browser-based video pipeline powered by ffmpeg.wasm. Convert, trim, compress,
          and extract audio from your files entirely on your own device — every frame is processed
          locally, so nothing is ever uploaded to a server.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Opening the editor…
        </p>
        <a
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          href="/app/index.html"
        >
          Open the editor
        </a>
      </div>
    </main>
  );
}

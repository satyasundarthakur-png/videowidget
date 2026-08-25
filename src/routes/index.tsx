import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ffmpeg webCLI — Browser Video & Audio Toolkit" },
      {
        name: "description",
        content:
          "Run ffmpeg commands entirely in your browser. Convert, trim, and transcode video and audio locally with no uploads.",
      },
      { property: "og:title", content: "ffmpeg webCLI — Browser Video & Audio Toolkit" },
      {
        property: "og:description",
        content:
          "Run ffmpeg commands entirely in your browser. Convert, trim, and transcode video and audio locally with no uploads.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/app/index.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground">ffmpeg webCLI</h1>
        <p className="mt-2 text-sm text-muted-foreground">Loading the app…</p>
        <a
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          href="/app/index.html"
        >
          Open now
        </a>
      </div>
    </div>
  );
}

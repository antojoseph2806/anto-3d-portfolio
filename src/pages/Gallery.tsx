import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import HeroScene from "@/components/HeroScene";
import MouseFollower from "@/components/MouseFollower";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

const photos = [
  {
    src: "/gallery/anto-joseph-maruthaniyil-idukki-kerala-gallery-01.webp",
    alt: "Photo of Anto Joseph Maruthaniyil, software developer from Idukki, Kerala",
  },
  {
    src: "/gallery/anto-joseph-maruthaniyil-udayagiri-idukki-photo-02.webp",
    alt: "Gallery photo of Anto Joseph Maruthaniyil from Udayagiri, Idukki",
  },
  {
    src: "/gallery/anto-maruthaniyil-portfolio-gallery-photo-03.webp",
    alt: "Anto Joseph Maruthaniyil personal gallery photo",
  },
  {
    src: "/gallery/anto-joseph-maruthaniyil-mca-graduate-gallery-04.webp",
    alt: "Photo gallery image of Anto Joseph Maruthaniyil, MCA graduate in Idukki",
  },
  {
    src: "/gallery/anto-joseph-maruthaniyil-personal-portfolio-photo-05.webp",
    alt: "Anto Joseph Maruthaniyil portfolio gallery image",
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  const closeViewer = () => setActiveIndex(null);
  const showPrevious = () => {
    setActiveIndex((current) => (current === null ? photos.length - 1 : (current - 1 + photos.length) % photos.length));
  };
  const showNext = () => {
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % photos.length));
  };

  useEffect(() => {
    document.title = "Gallery | Anto Joseph Maruthaniyil";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Photo gallery of Anto Joseph Maruthaniyil, software developer and MCA graduate from Udayagiri, Idukki, Kerala.",
      );
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <div className="scanlines noise-overlay min-h-screen bg-background">
      <HeroScene />
      <div className="relative z-10">
        <MouseFollower />
        <Navbar />

        <main className="px-6 pb-16 pt-24 md:px-12 md:pt-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/"
                  data-hover
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  <ArrowLeft size={14} />
                  Back Home
                </Link>
                <h1 className="font-mono text-xs uppercase tracking-widest text-accent">
                  Gallery
                </h1>
              </div>
            </ScrollReveal>

            <div className="grid auto-rows-[18rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo, index) => (
                <ScrollReveal key={photo.src} delay={index * 80}>
                  <button
                    type="button"
                    data-hover
                    onClick={() => setActiveIndex(index)}
                    className={`group relative h-full w-full overflow-hidden rounded-lg border border-border bg-card text-left shadow-[0_18px_45px_-28px_rgba(0,255,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 ${
                      index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                    }`}
                    aria-label={`Open gallery photo ${index + 1}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </main>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/95 px-4 py-6 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo viewer"
        >
          <button
            type="button"
            onClick={closeViewer}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card/80 text-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="Close gallery viewer"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-card/80 text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="flex max-h-full w-full max-w-5xl items-center justify-center">
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[86vh] w-auto max-w-full rounded-lg border border-border object-contain shadow-[0_28px_90px_-40px_hsl(var(--accent)/0.6)]"
            />
          </div>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-card/80 text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            aria-label="Next photo"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

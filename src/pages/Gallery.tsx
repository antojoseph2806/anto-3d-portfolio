import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import MouseFollower from "@/components/MouseFollower";

const photos = [
  {
    src: "/TempDragFile_20261103_111033.png",
    alt: "Anto Joseph Maruthaniyil - Full-Stack Developer and Assistant Professor, Kerala",
    title: "Anto Joseph Maruthaniyil",
    caption: "Full-Stack Developer & Assistant Professor of Computer Science",
  },
  {
    src: "/TempDragFile_20261103_111038.png",
    alt: "Anto Joseph Maruthaniyil - Software Engineer from Idukki, Kerala",
    title: "Anto Joseph Maruthaniyil",
    caption: "Software Engineer specializing in React and Node.js",
  },
  {
    src: "/TempDragFile_20261103_111044.png",
    alt: "Anto Joseph Maruthaniyil - IoT and Cloud Developer, St. Antony's College",
    title: "Anto Joseph Maruthaniyil",
    caption: "IoT & Cloud Developer at St. Antony's College Peruvanthanam",
  },
  {
    src: "/TempDragFile_20261103_111053.png",
    alt: "Anto Joseph Maruthaniyil - Educator and Developer from Udayagiri, Idukki",
    title: "Anto Joseph Maruthaniyil",
    caption: "Educator & Developer — Udayagiri, Idukki District, Kerala",
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <MouseFollower />
      <Navbar />

      {/* SEO-rich hidden structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Anto Joseph Maruthaniyil — Photo Gallery",
            description:
              "Photos of Anto Joseph Maruthaniyil, Full-Stack Developer and Assistant Professor of Computer Science at St. Antony's College Peruvanthanam, Kerala.",
            url: "https://www.antomaruthaniyil.in/gallery",
            author: {
              "@type": "Person",
              name: "Anto Joseph Maruthaniyil",
              url: "https://www.antomaruthaniyil.in/",
            },
            image: photos.map((p) => ({
              "@type": "ImageObject",
              url: `https://www.antomaruthaniyil.in${p.src}`,
              name: p.title,
              description: p.alt,
              author: {
                "@type": "Person",
                name: "Anto Joseph Maruthaniyil",
              },
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-background px-6 pt-32 pb-24 md:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Page header */}
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                Gallery
              </p>
              <h1 className="text-4xl font-display font-bold text-foreground md:text-6xl">
                Anto Joseph Maruthaniyil
              </h1>
              <p className="mt-4 font-mono text-sm text-muted-foreground max-w-xl mx-auto">
                Assistant Professor of Computer Science · Full-Stack Developer · Idukki, Kerala
              </p>
            </div>
          </ScrollReveal>

          {/* Photo grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {photos.map((photo, index) => (
              <ScrollReveal key={photo.src} delay={index * 100}>
                <figure className="overflow-hidden rounded-lg border border-border bg-card">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    title={photo.title}
                    width={1080}
                    height={1080}
                    decoding="async"
                    loading="lazy"
                    className="h-full w-full object-cover aspect-square"
                  />
                </figure>
              </ScrollReveal>
            ))}
          </div>

          {/* Back link */}
          <ScrollReveal delay={400}>
            <div className="mt-16 text-center">
              <button
                onClick={() => {
                  navigate("/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 border border-accent px-6 py-3 font-mono text-sm tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                ← BACK TO PORTFOLIO
              </button>
            </div>
          </ScrollReveal>

        </div>
      </main>
    </>
  );
};

export default Gallery;

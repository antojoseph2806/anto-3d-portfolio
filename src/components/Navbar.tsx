import { CSSProperties, useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const triangleStyle: CSSProperties = {
  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
};

const panelStyle: CSSProperties = {
  clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 18%)",
};

const linkStyle: CSSProperties = {
  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between font-mono text-sm ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <a
        href="#"
        onClick={() => setOpen(false)}
        className="text-foreground font-display font-bold text-lg tracking-tight"
      >
        AJ<span className="text-accent">.</span>
      </a>
      <div className="relative md:hidden">
        {open && (
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-background/30 backdrop-blur-[2px]"
          />
        )}
        <button
          type="button"
          className="relative z-20 inline-flex h-14 w-14 items-center justify-center text-accent transition-transform duration-300 hover:scale-105"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span
            className={`absolute inset-0 border border-accent/40 bg-background/80 shadow-[0_0_28px_-14px_hsl(var(--accent)/0.95)] transition-all duration-500 ${
              open ? "border-accent/70 shadow-[0_0_34px_-10px_hsl(var(--accent)/0.9)]" : ""
            }`}
            style={triangleStyle}
          />
          <span
            className="absolute inset-[2px] bg-gradient-to-b from-accent/20 via-secondary/85 to-background/95"
            style={triangleStyle}
          />
          <span
            className={`absolute left-1/2 top-[42%] h-px w-5 -translate-x-1/2 bg-current transition-all duration-300 ${
              open ? "translate-y-1 rotate-45" : "-translate-y-[7px]"
            }`}
          />
          <span
            className={`absolute left-1/2 top-[42%] h-px w-5 -translate-x-1/2 bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-1/2 top-[42%] h-px w-5 -translate-x-1/2 bg-current transition-all duration-300 ${
              open ? "translate-y-1 -rotate-45" : "translate-y-[7px]"
            }`}
          />
        </button>
        {open && (
          <div
            id="mobile-navigation"
            className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-[min(18rem,calc(100vw-2rem))]"
          >
            <div
              className="absolute inset-0 border border-accent/35 bg-background/90 shadow-[0_24px_80px_-40px_hsl(var(--accent)/0.9)]"
              style={panelStyle}
            />
            <div className="relative overflow-hidden px-5 pb-5 pt-6 backdrop-blur-xl" style={panelStyle}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.18),transparent_48%)]" />
              <div className="relative">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-accent/80">
                  Navigate
                </p>
                <div className="space-y-3">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="group relative block overflow-hidden border border-border/80 bg-secondary/45 px-4 py-3 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground transition-all duration-300 hover:border-accent/50 hover:text-foreground"
                      style={linkStyle}
                    >
                      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(90deg,transparent,hsl(var(--accent)/0.12),transparent)]" />
                      <span className="relative flex items-center justify-between">
                        <span>{link.label}</span>
                        <span className="text-accent/60">0{index + 1}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

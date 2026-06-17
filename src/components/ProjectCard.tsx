import { useRef, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

const ProjectCard = ({ title, description, tags, index, links = [] }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setTransform({ rotateX, rotateY, scale: 1.02 });
    setMousePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="group relative"
      style={{
        perspective: "1000px",
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered 
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px -10px hsl(var(--accent) / 0.4)`
            : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Animated gradient border */}
        <div 
          className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent) / 0.8), transparent 60%)`,
            zIndex: -1,
          }}
        />
        
        {/* Image placeholder with 3D depth */}
        <div 
          className="h-48 bg-secondary relative overflow-hidden"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent) / 0.08), transparent 45%)`,
            }}
          />
          
          {/* Animated background pattern */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent) / 0.5) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="font-mono text-foreground text-xs tracking-widest uppercase transition-all duration-500 group-hover:text-accent group-hover:scale-110"
              style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0)" }}
            >
              {title}
            </span>
          </div>
          
          {/* Scanline effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(var(--accent)/0.03)_2px,hsl(var(--accent)/0.03)_4px)]" />
        </div>

        <div className="p-6 relative z-10 bg-card/95">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-justify text-sm text-foreground mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded border border-border bg-secondary text-foreground transition-all duration-300 group-hover:border-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>
          {links.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={`${title}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center border border-accent/30 px-3 py-1.5 text-xs font-mono tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

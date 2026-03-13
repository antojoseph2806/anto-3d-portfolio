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

const ProjectCard = ({ title, description, tags, index, links = [] }: ProjectCardProps) => (
  <div
    data-hover
    className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_hsl(var(--accent)/0.2)]"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Glow overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Image placeholder */}
    <div className="h-48 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-muted-foreground text-xs tracking-widest uppercase">
          {title}
        </span>
      </div>
      {/* Scanline on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(var(--accent)/0.03)_2px,hsl(var(--accent)/0.03)_4px)]" />
    </div>

    <div className="p-6 relative z-10">
      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2.5 py-1 rounded border border-border bg-secondary text-muted-foreground"
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
              className="inline-flex items-center border border-accent/30 px-3 py-1.5 text-xs font-mono tracking-[0.2em] text-accent transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ProjectCard;

const MarqueeText = ({ text = "CREATIVITY · CODE · DESIGN · INNOVATION · " }: { text?: string }) => (
  <div className="overflow-hidden py-12 select-none pointer-events-none">
    <div className="flex animate-marquee">
      <span className="scrolling-text flex-shrink-0">{text}</span>
      <span className="scrolling-text flex-shrink-0">{text}</span>
    </div>
  </div>
);

export default MarqueeText;

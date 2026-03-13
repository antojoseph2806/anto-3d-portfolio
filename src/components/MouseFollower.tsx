import { useEffect, useRef } from "react";

const MouseFollower = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0, y = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.left = `${cx}px`;
      el.style.top = `${cy}px`;
      requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-hover]")) {
        el.classList.add("hovering");
      }
    };
    const onOut = () => el.classList.remove("hovering");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div ref={ref} className="mouse-follower hidden md:block" />;
};

export default MouseFollower;

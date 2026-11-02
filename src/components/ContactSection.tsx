import type { LucideIcon } from "lucide-react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface ContactMethod {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    value: "antojoseph2027@gmail.com",
    href: "mailto:antojoseph2027@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 62822 89862",
    href: "tel:+916282289862",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Idukki, Kerala",
    href: "https://maps.google.com/?q=Idukki,Kerala",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/antojoseph2806",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/antomaruthaniyil",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/anto_maruthaniyil",
  },
];

const ContactSection = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ScrollReveal direction="left" className="md:col-span-2">
        <div className="rounded-lg border border-border bg-card p-8">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Get In Touch
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {contactMethods.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  data-hover
                  className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-secondary/30 p-6 text-center transition-all duration-300 hover:border-accent hover:bg-secondary/50"
                >
                  <div className="rounded-md border border-accent/30 bg-accent/10 p-3 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/20">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {item.label}
                    </p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={100}>
        <div className="rounded-lg border border-border bg-card p-8">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Connect
          </p>
          <div className="space-y-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  data-hover
                  className="flex items-center gap-3 border border-border bg-secondary/30 px-4 py-3 font-mono text-xs tracking-[0.2em] text-foreground transition-all duration-300 hover:border-accent hover:bg-secondary/50 hover:text-accent"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4">
            <p className="text-xs leading-relaxed text-foreground">
              Feel free to reach out for project collaborations, job opportunities, or just to connect.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ContactSection;

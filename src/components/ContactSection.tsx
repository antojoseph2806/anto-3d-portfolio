import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import type { LucideIcon } from "lucide-react";
import { AlertCircle, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const EMAILJS_PUBLIC_KEY = "zc_-kJ9FYyYotmaZY";
const EMAILJS_SERVICE_ID = "service_13kqq1u";
const EMAILJS_TEMPLATE_ID = "template_zce49i1";

const NAME_REGEX = /^[A-Za-z' -]{2,50}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

interface FormDataState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    value: "antojoseph2026@gmail.com",
    href: "mailto:antojoseph2026@gmail.com",
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

const initialFormData: FormDataState = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const validate = (values: FormDataState) => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Name is required.";
    } else if (!NAME_REGEX.test(values.name.trim())) {
      nextErrors.name = "Use 2-50 letters, spaces, apostrophes, or hyphens.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    return nextErrors;
  };

  const handleChange =
    (field: keyof FormDataState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setFormData((current) => ({ ...current, [field]: value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      if (status.type) {
        setStatus({ type: null, message: "" });
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        reply_to: formData.email.trim(),
      });

      setFormData(initialFormData);
      setErrors({});
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Message could not be sent right now. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-8">
        <ScrollReveal direction="left">
          <div className="rounded-lg border border-border bg-card p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Reach Out
            </p>
            <div className="space-y-5">
              {contactMethods.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-start gap-4 border-b border-border pb-5 transition-colors duration-300 last:border-b-0 last:pb-0 hover:text-foreground"
                  >
                    <div className="mt-0.5 rounded-md border border-accent/30 bg-accent/10 p-2 text-accent">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={100}>
          <div className="rounded-lg border border-border bg-card p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Social
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <Icon size={14} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>

      <ScrollReveal direction="right" delay={150}>
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="mb-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Send Message
            </p>
            <h3 className="text-3xl font-display font-bold text-foreground">
              Start a conversation.
            </h3>
            <p className="mt-3 text-muted-foreground">
              Share a project idea, role, or collaboration opportunity and I will get back to you.
            </p>
          </div>

          {status.type && (
            <div
              className={`mb-6 flex items-start gap-3 rounded-md border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-accent/40 bg-accent/10 text-foreground"
                  : "border-destructive/40 bg-destructive/10 text-foreground"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle2 size={18} className="mt-0.5 text-accent" />
              ) : (
                <AlertCircle size={18} className="mt-0.5 text-destructive" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange("name")}
                disabled={sending}
                className="w-full border border-border bg-secondary/60 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent disabled:cursor-not-allowed disabled:opacity-70"
                placeholder="Enter name"
              />
              {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange("email")}
                disabled={sending}
                className="w-full border border-border bg-secondary/60 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent disabled:cursor-not-allowed disabled:opacity-70"
                placeholder="Enter email"
              />
              {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange("message")}
                disabled={sending}
                rows={6}
                className="w-full resize-none border border-border bg-secondary/60 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent disabled:cursor-not-allowed disabled:opacity-70"
                placeholder="Enter message"
              />
              {errors.message && (
                <p className="mt-2 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              data-hover
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-3 border border-accent px-6 py-3 font-mono text-sm tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  SENDING
                </>
              ) : (
                <>
                  <Send size={16} />
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ContactSection;

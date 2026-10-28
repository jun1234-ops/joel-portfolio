import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { contact } from "@/data/site";

// Which logo goes with each "icon" key in site.js
const icons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  x: FaXTwitter,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
};

// Each brand's hover colour (written out in full so Tailwind can find them)
const hoverColors = {
  linkedin: "hover:bg-[#0A66C2] hover:text-white",
  github: "hover:bg-[#24292f] hover:text-white dark:hover:bg-white dark:hover:text-black",
  x: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
  instagram: "hover:bg-[#E4405F] hover:text-white",
  whatsapp: "hover:bg-[#25D366] hover:text-white",
};

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {contact.socials.map((s) => {
        const Icon = icons[s.icon];

        // Little label that appears above the icon on hover
        const tooltip = (
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition group-hover:opacity-100">
            {s.href ? s.handle : "Add your link"}
          </span>
        );

        // No link yet: faded dashed placeholder
        if (!s.href) {
          return (
            <span
              key={s.label}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-foreground/30 text-foreground/40"
            >
              <Icon size={20} />
              {tooltip}
            </span>
          );
        }

        // Real link: clickable with hover effect
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`group relative flex h-12 w-12 items-center justify-center rounded-full bg-surface text-foreground shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg ${hoverColors[s.icon]}`}
          >
            <Icon size={20} />
            {tooltip}
          </a>
        );
      })}
    </div>
  );
}
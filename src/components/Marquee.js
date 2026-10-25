import { profile } from "@/data/site";

export default function Marquee() {
  // The list is doubled so the loop never shows a gap
  const items = [...profile.skills, ...profile.skills];

  return (
    <div className="overflow-hidden bg-brand-amber py-4 text-brand-green">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap text-lg font-bold">
        {items.map((skill, i) => (
          <span key={i} className="flex items-center gap-10">
            {skill}
            <span aria-hidden="true">✱</span>
          </span>
        ))}
      </div>
    </div>
  );
}
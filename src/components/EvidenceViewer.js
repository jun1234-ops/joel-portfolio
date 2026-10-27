"use client";

import { useEffect } from "react";

// Small clickable box. Shows the image if there is one, a placeholder if not.
export function EvidenceThumb({ item, onOpen }) {
  const isPdf = item.src && item.src.endsWith(".pdf");

  return (
    <button
      onClick={() => onOpen(item)}
      aria-label={`View evidence: ${item.label}`}
      className="flex h-20 w-24 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-foreground/20 bg-background text-center text-xs text-foreground/50 transition hover:border-brand-amber hover:text-brand-amber"
    >
      {item.src && !isPdf ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.src} alt={item.label} className="h-full w-full object-cover" />
      ) : (
        <span className="px-2">{isPdf ? "PDF: " : ""}{item.label}</span>
      )}
    </button>
  );
}

// Full-screen viewer. Close with the X, the dark backdrop, or the Escape key.
export function Lightbox({ item, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;
  const isPdf = item.src && item.src.endsWith(".pdf");

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
    >
      <button
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-black"
      >
        ✕
      </button>

      {/* Clicking inside the content should not close the viewer */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-3xl text-center"
      >
        {item.src && !isPdf ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.label}
            className="mx-auto max-h-[75vh] rounded-xl object-contain"
          />
        ) : isPdf ? (
          <a
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-brand-amber px-6 py-3 font-medium text-brand-green"
          >
            Open PDF
          </a>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-white/40 text-white/70">
            {item.label} (placeholder)
          </div>
        )}
        <p className="mt-4 text-white">{item.label}</p>
      </div>
    </div>
  );
}
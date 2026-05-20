"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PillButton from "./PillButton";

export default function ImageLightbox({ images }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveImage(image)}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-panel text-left shadow-cinematic transition hover:border-white/20"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[#0b0b0b]/92 p-4 shadow-cinematic sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex justify-end">
              <PillButton variant="secondary" onClick={() => setActiveImage(null)}>
                Close
              </PillButton>
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1600}
                height={1200}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

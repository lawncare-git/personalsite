"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PillButton from "./PillButton";

export default function VideoModal({ videos }) {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideo]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {videos.map((video) => {
          const isRed = video.accent === "red";
          return (
            <button
              key={video.title}
              type="button"
              onClick={() => setActiveVideo(video)}
              className={[
                "group flex items-center gap-3 rounded-full border px-3 py-3 pr-5 text-left transition",
                isRed
                  ? "border-red-500/40 bg-red-600 text-white hover:bg-red-500"
                  : "border-white/15 bg-white/5 text-white hover:border-white/35 hover:bg-white/8",
              ].join(" ")}
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10">
                <Image
                  src={video.thumbnailSrc}
                  alt={`${video.title} thumbnail`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em]">
                {video.title}
              </span>
            </button>
          );
        })}
      </div>

      {activeVideo ? (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[#0b0b0b]/92 p-4 shadow-cinematic sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-nav text-white/50">Video</p>
                <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  {activeVideo.title}
                </h2>
              </div>
              <PillButton variant="secondary" onClick={() => setActiveVideo(null)}>
                Close
              </PillButton>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              {activeVideo.embedSrc ? (
                <div className="relative aspect-video w-full">
                  <iframe
                    width="560"
                    height="315"
                    src={activeVideo.embedSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              ) : (
                <video
                  key={activeVideo.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="aspect-video w-full"
                  src={activeVideo.videoSrc}
                />
              )}
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base">
              {activeVideo.notes}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

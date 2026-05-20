import VideoModal from "../../components/VideoModal";

const videos = [
  {
    title: "Animation",
    videoSrc: "/videos/Animation.mp4",
    thumbnailSrc: "/images/animationThmb.png",
    notes: "Demo reel: 2023, MAYA, FACS, Motion Capture, Pre-Visualisation.",
    accent: "red",
  },
  {
    title: "Modular",
    videoSrc: "/videos/Modular.mp4",
    thumbnailSrc: "/images/modularThmb.png",
    notes: "VCV Rack, Various Modular",
    accent: "default",
  },
  {
    title: "Funches",
    videoSrc: "/videos/Funches.mp4",
    thumbnailSrc: "/images/funchesThmb.png",
    notes: "After Effects, Photoshop",
    accent: "default",
  },
  {
    title: "Anime",
    embedSrc: "https://www.youtube.com/embed/PdYxw3TE-nU?si=1VCMjeRsL3t37tJ6",
    thumbnailSrc: "/images/animeThmb.png",
    notes: "ComfyUI, Various LoRA's/Models, Seedream4.5/5, Seedace2.0, GPTImage2.0, DaVinci Resolve20",
    accent: "default",
  },
  {
    title: "UESound",
    videoSrc: "/videos/UESound.mp4",
    thumbnailSrc: "/images/uesoundThmb.png",
    notes: "UE5.6, Metasounds, Ableton Live10, Various Hardware/Software Synths",
    accent: "default",
  },
  {
    title: "Santa",
    videoSrc: "/videos/Santa.mp4",
    thumbnailSrc: "/images/santaThmb.png",
    notes: "Runway, DaVinci Resolve20. Made for my niece and nephew with a friend of mine.",
    accent: "default",
  },
];

export default function VideosPage() {
  return (
    <section className="mx-auto min-h-[calc(100vh-88px)] max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs uppercase tracking-nav text-white/55">Videos</p>
        <h1 className="mt-6 text-4xl font-black uppercase tracking-tight sm:text-5xl">
          These are videos of things I have done.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Select a category to open a focused player with notes and tools used.
        </p>
      </div>
      <div className="mt-14">
        <VideoModal videos={videos} />
      </div>
    </section>
  );
}

import ImageLightbox from "../../components/ImageLightbox";

const images = [
  {
    src: "/images/gifPipeline.png",
    alt: "GIF pipeline project still",
  },
  {
    src: "/images/wizard_turnaround.png",
    alt: "Wizard turnaround artwork",
  },
];

export default function ImagesPage() {
  return (
    <section className="mx-auto min-h-[calc(100vh-88px)] max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-nav text-white/55">Images</p>
        <h1 className="mt-6 text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Selected stills and image work.
        </h1>
      </div>
      <div className="mt-14">
        <ImageLightbox images={images} />
      </div>
    </section>
  );
}

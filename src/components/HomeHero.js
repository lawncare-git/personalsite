import Image from "next/image";
import PillButton from "./PillButton";

export default function HomeHero() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-nav text-white/55">
          Artist. Animator. Audio Engineer.
        </p>
        <h1 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-[7rem]">
          <span className="block">Carlos</span>
          <span className="block">DeJesus</span>
        </h1>
        <p className="mt-6 text-lg font-medium text-white/85 sm:text-xl">
          Multimedia Artist.
        </p>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
          I work with Motion Capture Systems, ComfyUI, Digital Audio Workspaces,
          3D and editing software to make cool things.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <PillButton href="/videos">Videos</PillButton>
          <PillButton href="/resume" variant="secondary">
            Resume
          </PillButton>
        </div>
      </div>
      <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel shadow-cinematic">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 top-0 z-10 h-px bg-white/15" />
          <Image
            src="/images/me.png"
            alt="Carlos DeJesus portrait"
            width={900}
            height={1200}
            priority
            className="h-[26rem] w-full object-cover object-center sm:h-[32rem]"
          />
        </div>
      </div>
    </section>
  );
}

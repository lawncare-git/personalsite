import PillButton from "./PillButton";

const skills = [
  "Maya",
  "Unreal Engine",
  "Blueprints",
  "Motion Capture Animation",
  "Facial Animation / Faceware",
  "Retargeting",
  "Locomotion Systems",
  "Quartz / Metasounds",
  "Previsualization",
  "Keyframe Animation",
  "Technical Animation",
  "VR Production Pipelines",
];

export default function ResumePage() {
  return (
    <section className="mx-auto min-h-[calc(100vh-88px)] max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-8 border border-white/10 bg-white/[0.03] p-6 shadow-cinematic sm:rounded-[2rem] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-nav text-white/55">Resume</p>
            <h1 className="mt-6 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              Carlos DeJesus
            </h1>
            <p className="mt-4 text-lg text-white/82">
              Animator, Technical Animator, Motion Capture Specialist
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Contact details are available in the attached resume PDF.
            </p>
          </div>
          <PillButton href="/resume/Carlos-DeJesus-Resume.pdf" download>
            Download Resume
          </PillButton>
        </div>

        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-black">
          <iframe
            src="/resume/Carlos-DeJesus-Resume.pdf"
            title="Carlos DeJesus Resume PDF"
            className="h-[70vh] min-h-[36rem] w-full"
          />
        </div>

        <section className="border-t border-white/10 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-nav text-white/55">
            Skills
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex min-h-12 min-w-[11rem] items-center rounded-full border border-white/10 bg-white/[0.025] px-5 text-sm font-medium text-white/82"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

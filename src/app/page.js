import FooterOpenStageText from "../components/FooterOpenStageText";
import HomeHero from "../components/HomeHero";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col justify-center px-6 pb-10 pt-8 sm:px-8 lg:px-10">
      <HomeHero />
      <FooterOpenStageText />
    </div>
  );
}

import LandingGradient from "./components/LandingGradient";

export default function Home() {
  return (
    <main className="relative w-full">
      <LandingGradient />
      {/* First section - animation visible */}
      <section className="h-screen" />
      {/* Content below - animation fades out as you scroll here */}
      <section className="h-screen" />
    </main>
  );
}

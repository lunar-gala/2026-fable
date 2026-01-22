import LandingGradient from "./components/LandingGradient";
import NavBar from "./components/NavBar";
import { COLORS } from "./constants";

export default function Home() {
  return (
    <main
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <NavBar />
      <LandingGradient />
      {/* First section - animation visible */}
      <section className="h-screen" />
      {/* Content below - animation fades out as you scroll here */}
      <section className="h-screen" />
    </main>
  );
}

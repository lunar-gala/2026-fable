import AboutContent from "./components/About/AboutContent";
import AboutFull from "./components/About/AboutFull";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import { COLORS } from "./constants";

export default function Home() {
  return (
    <main
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <NavBar />
      <AboutFull />
    </main>
  );
}

import Act1 from "../components/Act1/Act1";
import NavBar from "../components/NavBar";
import { COLORS } from "../constants";

export default function Act1Page() {
  return (
    <main
      className="relative w-full h-screen overflow-hidden"
    //   style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
      
    >
      <NavBar />
      <Act1 />
      <section className="h-screen" />
      <section className="h-screen" />
    </main>
  );
}

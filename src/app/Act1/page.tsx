import Act1 from "../components/Act1/Act1";
import NavBar from "../components/NavBar";

export default function Act1Page() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <NavBar />
      <Act1 />
      <section className="h-screen" />
      <section className="h-screen" />
    </main>
  );
}

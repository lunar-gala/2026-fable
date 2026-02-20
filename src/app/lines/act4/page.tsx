import LinepgFull from "@/app/components/Line page templates/A4LinesFull";
import NavBar from "@/app/components/NavBar";

export default function A4LinePage() {
  return (
    <>
      <div className="pageContent">
        <NavBar />
        <div className="linesMain">
          <LinepgFull />
        </div>
      </div>
    </>
  );
}
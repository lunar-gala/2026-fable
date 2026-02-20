import LinepgFull from "@/app/components/Line page templates/A3LinesFull";
import NavBar from "@/app/components/NavBar";

export default function A3LinePage() {
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
import LinepgFull from "@/app/components/Line page templates/A2LinesFull";
import NavBar from "@/app/components/NavBar";
export default function A2LinePage() {
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
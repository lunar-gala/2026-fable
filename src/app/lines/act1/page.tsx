import LinepgFull from "@/app/components/Line page templates/A1LinesFull";
import NavBar from "@/app/components/NavBar";
/**import Act3StageSetter from "./Act3StageSetter"; 
 */
export default function A1LinePage() {
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
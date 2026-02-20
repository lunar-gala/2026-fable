import LinesFull from "@/app/components/Line page templates/A3LinesFull";
import NavBar from "../components/NavBar";
import TopNavBar from "../components/Line page templates/TopNavBar";
/**import Act3StageSetter from "./Act3StageSetter"; 
 */
export default function LinesPage() {
  return (
    <>
      <div className="pageContent">
        <NavBar />
        <div className="linesMain">
          <LinesFull />
        </div>
      </div>
    </>


  );
}
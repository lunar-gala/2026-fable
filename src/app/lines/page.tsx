import LinesFull from "@/app/components/Act 3 Line/A3LinesFull";
import NavBar from "../components/NavBar";
import TopNavBar from "../components/Act 3 Line/TopNavBar";
import Act3StageSetter from "./Act3StageSetter";

export default function LinesPage() {
  return (
    <>
      <Act3StageSetter />
      <div className="pageContent">
        <NavBar />
        <TopNavBar />
        <div className="linesMain">
          <LinesFull />
        </div>
      </div>
    </>


  );
}
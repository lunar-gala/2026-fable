import LinepgFull from "@/app/components/Line page templates/A1LinesFull";
import NavBar from "@/app/components/NavBar";
import { Suspense } from 'react'

/**import Act3StageSetter from "./Act3StageSetter"; 
 */
export default function A1LinePage() {
  return (
    <>
      <div className="pageContent">
        <NavBar />
        <Suspense>
          <div className="linesMain">
            <LinepgFull />
          </div>         
        </Suspense>
      </div>
    </>


  );
}
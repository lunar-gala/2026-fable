import LinepgFull from "@/app/components/Line page templates/A3LinesFull";
import NavBar from "@/app/components/NavBar";
import { Suspense } from 'react'


export default function A3LinePage() {
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
import LinesFull from "@/app/components/Lines/LinesFull";
import NavBar from "../components/NavBar";
import TopNavBar from "../components/Lines/TopNavBar";

export default function LinesPage() {
  return (
    <>
    <div className="pageContent">
      <NavBar />
      {/* <TopNavBar /> */}
      <LinesFull />
    </div>

    </>


  );
}
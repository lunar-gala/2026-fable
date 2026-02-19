import LinesFull from "@/app/components/LinesList/LinesFull";
import NavBar from "../components/NavBar";
import TopNavBar from "../components/Act 1 Line/TopNavBar";

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
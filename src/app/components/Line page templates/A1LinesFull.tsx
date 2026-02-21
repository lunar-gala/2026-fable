"use client";
import A1LinesContent from "@/app/components/Line page templates/A1LinesContent";
import { useSearchParams } from "next/navigation";
import A2LinesContent from "@/app/components/Line page templates/A2LinesContent";
import A3LinesContent from "@/app/components/Line page templates/A3LinesContent";
import A4LinesContent from "@/app/components/Line page templates/A4LinesContent";
import LinePageGrid from "@/app/components/Line page templates/LinePageGrid";
import LinesNav from "@/app/components/Line page templates/LinesNav";
import "@/app/components/Line page templates/linespages.css";



// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function A3LinesFull() {
  const searchParams = useSearchParams();
  const lineParam = searchParams?.get("line");
  const lineNumber = lineParam ? parseInt(lineParam, 10) : 1;

  // Example content for each line number
  const lineContent = [
    {
      lineName: "Frame 36",
      lineTagline: "Where memory develops, fades, and reappears",
      lineDescription: "Frame 36 captures the fleeting beauty of memory. Those moments that blur between what was lived and what’s left behind on film. Inspired by the process of developing photographs, the collection moves through stages of exposure, fixation, and digital revival, each look embodying a different way we preserve the past. Fluid, light-catching fabrics and warm orange-red tones glow like light leaks on aged film, evoking the warmth and euphoria of nostalgia. Frame 36 celebrates memory not as something static, but as something alive. A feeling that develops, fades, and comes back into focus, over and over again.",
      lineDesigners: "Mikayla Gee, Nataniella Essang",
    },
    {
      lineName: "Lustre",
      lineTagline: "REFRACTION 1.52",
      lineDescription: "Lustre turns nostalgia into something you can touch. Inspired by gems as memory-keepers, each look becomes a crystalline vessel that holds an emotion, then refracts it into color, texture, and movement. Some memories refract with sharp clarity; others blur into a soft glow. The garments do not quote the past; they transform it, turning intimate recollection into wearable light. Across the lineup, individual facets accumulate into a spectrum, revealing how different histories can shimmer in the same space.",
      lineDesigners: "Milada Kweon, Annissa Gao",
    },
    {
      lineName: "Nurture in Layers",
      lineTagline: "Before the world touches us",
      lineDescription: " 'Nurture in Layers' explores nostalgia as a biological and emotional state rather than a remembered moment. Inspired by the womb, the line reflects the idea that complete safety exists only before we enter the world. Through five looks that move from enclosure to release, the collection traces a process of formation—cocoon, bone, skin, blood, and finally bloom. By returning to a state we cannot consciously remember, the line reframes nostalgia as a longing for primal stability rather than the past itself.",
      lineDesigners: "Jules Kwon",
    },
    {
      lineName: "Becoming",
      lineTagline: "Live with the ones left behind",
      lineDescription: "Nostalgia originated from battle, when doctors diagnosed soldiers with a fatal longing for home. At its root, nostalgia is bound to the human wish for immortality, shadowed by the inevitability of mortality. We mourn the past because we cannot return to it, though this yearning can eat us alive. But over time, the meaning of the word has transformed. What began as grief has become sentimental. What was once an illness has softened into the memory, joy, and warmth of childhood recollections. This collection traces that change. The raw, torn steel framed pieces soften into fluidity, and dark tones dissolve into lighter hues. Each piece captures a moment in the transformation and tells a story about the origins of this human feeling. What we are achieving is the final acceptance of nostalgia: the past stays behind us, while the present is celebrated.",
      lineDesigners: "Catherine Li, Allen Chen",
    },
  ];
  const content = lineContent[(lineNumber - 1) % lineContent.length];
/**
  lineName: string;
  lineTagline: string;
  lineDescription: string;
  lineDesigners: string;
 */
  return (
    <>
      <div className="w100h100">
        <LinesNav />
        <div className="linesPageContent">
          <div className="linepgTextContent">
            <A1LinesContent 
              lineName={content.lineName}
              lineTagline={content.lineTagline}
              lineDescription={content.lineDescription}
              lineDesigners={content.lineDesigners}
            />
            </div>
          <LinePageGrid/>
        </div>
      </div>

    </>


  );
}


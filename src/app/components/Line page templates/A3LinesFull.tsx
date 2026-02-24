"use client";

import { useSearchParams } from "next/navigation";
import A3LinesContent from "@/app/components/Line page templates/A3LinesContent";
import MobileLinesContent from "@/app/components/Line page templates/MobileLinesContent";
import LinePageGrid from "@/app/components/Line page templates/LinePageGrid";
import LinesNav from "@/app/components/Line page templates/LinesNav";
import "@/app/components/Line page templates/linespages.css";

import React, { useState } from 'react';



// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function A3LinesFull() {
  const searchParams = useSearchParams();
  const lineParam = searchParams?.get("line");
  const lineNumber = lineParam ? parseInt(lineParam, 10) : 1;

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);    

  // Example content for each line number
  const lineContent = [
    {
      lineName: "EDEN",
      lineTagline: "The Garden of Good and Evil",
      lineDescription: "EDEN draws inspiration from Midnight in the Garden of Good and Evil, John Berendt’s iconic 1994 bestseller that captivated the world and transformed Savannah, Georgia into a symbol of mystery, elegance, and Southern allure. EDEN channels this spirit through echoes of Southern belles, languid summer evenings, and the bittersweet emotions of growing up. Each piece embodies Savannah’s distinctive blend of sophistication, romanticism, and ethereal beauty, reimagined with a modern twist. This collection reflects on the timeless the eternal interplay of good and evil within a garden, woven through the lens of childhood nostalgia, and ultimately brought together under the concept of EDEN.",
      lineDesigners: "Esther Lin",
    },
    {
      lineName: "Omoide",
      lineTagline: "Smother me in your embrace—hold onto me tight, until we disappear",
      lineDescription: "Omoide reflects a bittersweet desire to revisit, to remain close to what has shaped you, and to find comfort in the sustained embrace of the past. The collection unfolds as a timeline, fluid in passage yet layered, tracing the tension between what endures and what recedes. Moving from modern silhouettes toward traditional Japanese ceremonial dress, the garments suggest time as something being unfolded and revisited. Long, wrapped layers carry the precious yet constrictive weight of memory. Digital photographic prints appear as fragments of personal history, grounding each look in lived experience. Identity is shaped through accumulation, where remnants of culture and memory persist than disappear. Time progresses relentlessly, yet Omoide longs to still hold those wavering moments close to you, even when closeness constrains.",
      lineDesigners: "Sulli Yatabe",
    },
    {
      lineName: "Jangal",
      lineTagline: "95,000 Hours On A Punchcard.",
      lineDescription: "Our clothes are maximally honest depictions of work, aggregating shifts into a lifetime. Frayed cuffs, blown-out knees, and layered sweat stains quietly tally each workday. Countries as different as India and the United States illustrate the universality of this principle, observed by identical patterns of persistence. Incremental progress is marked by endless weathering and perpetual repairs, and this discipline blends work into identity. To reflect the beautiful variation between paths, we hybridize cultures to explore an environment’s interaction with the wearer and their clothes. The sun’s transforming spice and color, oxidizing metals of heavy industry, and constellated indigo nights. A patchworked garment is reincarnated, stronger. Eternal reconstruction brings a final point. Work defines self.",
      lineDesigners: "Raj Methi",
    },
    {
      lineName: "Faint Blossom",
      lineTagline: "Let's only walk where flowers bloom ",
      lineDescription: "Like a flower blooming, a memory lies hidden, almost like a seed in the soil of your mind. Then, something awakens it, and the memory unfurls, carrying with it the colors and fragrance of past emotions. Just as a flower in bloom fills the air with its presence, nostalgia fills the heart with feelings you thought were long gone.  Using the symbols within the overlap of Chinese and Korean culture, our line transforms them into modern forms that carry the weight of memory. Each design is a bloom of nostalgia—like a flower unfolding from the soil of our bicultural childhood, reviving the scents, colors, and emotions of the past while flourishing in the present.",
      lineDesigners: "Sadie Han, Ashley Park",
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
        {isMobile ? <MobileLinesContent 
                  lineName={content.lineName}
                  lineTagline={content.lineTagline}
                  lineDescription={content.lineDescription}
                  lineDesigners={content.lineDesigners}    
          /> 
        :   
          <div className="w100h100">
            <LinesNav />
            <div className="linesPageContent">
              <div className="linepgTextContent">
                <A3LinesContent 
                  lineName={content.lineName}
                  lineTagline={content.lineTagline}
                  lineDescription={content.lineDescription}
                  lineDesigners={content.lineDesigners}
                />
                </div>
              <LinePageGrid/>
            </div>
          </div>
        }
        </>


  );
}


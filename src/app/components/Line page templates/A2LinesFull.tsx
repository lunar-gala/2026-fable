"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from 'react';

import MobileLinesContent from "@/app/components/Line page templates/MobileLinesContent";
import A2LinesContent from "@/app/components/Line page templates/A2LinesContent";
import A3LinesContent from "@/app/components/Line page templates/A3LinesContent";
import A4LinesContent from "@/app/components/Line page templates/A4LinesContent";
import LinePageGrid from "@/app/components/Line page templates/LinePageGrid";
import LinesNav from "@/app/components/Line page templates/LinesNav";
import "@/app/components/Line page templates/linespages.css";



// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function A2LinesFull() {
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
      lineName: "Joie De Vivre",
      lineTagline: "When the world was bright, happy, and carefree",
      lineDescription: "Trace the shape of a perfect day from your childhood with us. The kind that lives in memory like sunlight through a window. This collection is whimsical and light, rooted in the pure wonder of being young. Each look marks a moment in the day, carrying you from place to place as a child would move through time. Morning unfolds in the softness of a kindergarten classroom; the soft glow of golden hour dapples the curtains; night drifts gently into the dreamscape of bedtime stories. Through it all, the world is rendered in its most nostalgic form: innocent, joyful, and unburdened, capturing the quiet magic of a day when happiness felt effortless and endless.",
      lineDesigners: "Annie Marcelino, Ashley Dai",
    },
    {
      lineName: "Whispers Before Sleep",
      lineTagline: "Follow the melody, linger the memory, drift into a dream, once again.",
      lineDescription: "Whispers Before Sleep emulates holding onto that feeling—the safety, the wonder, the strange sweetness of drifting between memory and dream. Nostalgia is at its core: the ache of remembering something so ordinary, yet so magical, like the creak of a rocking chair or the sound of pages turning in the dark. Each look is a fragment of those moments, reimagined in fabric and form.",
      lineDesigners: "Cara Moe, Tian Zhou",
    },
    {
      lineName: "Read Me a Story",
      lineTagline: "You don't have an imaginary friend? You must be really sad…do you want mine?",
      lineDescription: "Read Me a Story is everything you remember about having an imaginary friend, the feeling of an endless creativity and belief that anything is possible. Inspired by a mix of Tim Burton meets Monster High the line draws the designer's fascination with the weird and spooky from a young age. Where high fashion meets monsters, ghouls, riddles and games. Each look brings to life the classic archetypes of a story from the big bad to the hero that saves the day. These characters give the audience the opportunity to tap into their inner child and create their own story.",
      lineDesigners: "Zachary Yoshida",
    },
    {
      lineName: "Re(veil)ar",
      lineTagline: "Memory, veiled and unfolding",
      lineDescription: "Reveilar is a memory play. Each look is a fragment of a slumber party, drifting somewhere between reality and dream. It begins in the ordinary the act of showing up, of arriving with bags and secrets and expectations and then unravels into laughter, intimacy, play, and finally sleep. But even sleep is layered, moving from dream to nightmare before the sun rises again. The veils act as both shield and reveal, covering what’s private while hinting at what slips through. Together, the collection captures the slippage of memory: how a night isn’t remembered in order, but as a haze of textures, colors, and moods.",
      lineDesigners: "Jason Asiedu, Farah Daveau",
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
                <A2LinesContent 
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


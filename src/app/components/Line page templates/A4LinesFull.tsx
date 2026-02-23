"use client";

import { useSearchParams } from "next/navigation";
import A4LinesContent from "@/app/components/Line page templates/A4LinesContent";
import MobileLinesContent from "@/app/components/Line page templates/MobileLinesContent";
import LinePageGrid from "@/app/components/Line page templates/LinePageGrid";
import LinesNav from "@/app/components/Line page templates/LinesNav";
import "@/app/components/Line page templates/linespages.css";

import React, { useState } from 'react';
import NavBar from "../MobileNavBar";




// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function A4LinesFull() {
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

  //  content for each line number
  const lineContent = [
    {
      lineName: "Echo",
      lineTagline: "An Echo that Outlasts Time",
      lineDescription: "When you find yourself reminiscing over the past, it is not an act of remembrance, it is a rewriting of time. Echoes imitate these nostalgic moments, through waves of bliss and melancholy that bounce back as delayed, repeated versions of their original form that inevitably distort and fade. As these intangible echoes continue to resurface in cycles, they remind us not of what truly once was, but what we quietly long for. Each piece carries traces of warmth and shadow, preservation and decay, holding presence and absence at once. As we wait for these echoes to find their way back to us, they decay into a lingering absence.",
      lineDesigners: "Sydney Lee, Jada Cho",
    },
    {
      lineName: "Lethe",
      lineTagline: "Memories dissolve, feelings remain",
      lineDescription: "Lethe is inspired by the river of forgetting in Greek mythology. Rooted in the theme of nostalgia, the collection traces memory as it drifts, blurs, fractures, and re-emerges. Glossy fabrics and fluid silhouettes suggest clarity at the source, while sheer layers, fading colors, and irregular cuts evoke distortion and erosion. Frayed seams and open spaces mark absence, as vivid details surface like afterimages. Rather than recreating the past, Lethe explores how forgetting transforms memory—leaving fragments that can be reshaped into new emotional narratives.",
      lineDesigners: "Yubo Zhang",
    },
    {
      lineName: "Vestige",
      lineTagline: "Memory without edges",
      lineDescription: "Vestige reinterprets nostalgia as something fragile yet enduring, a presence that lingers even as it fades. The memory I bring back is of my father, whose passing blurred much of my childhood. The concept behind Vestige is that nostalgia is not a perfect photograph of the past but a shifting trace that grows with us. Instead of treating nostalgia as a return to the past, Vestige positions it as a transformation. The collection shows how memory fractures yet continues to illuminate, how absence becomes presence through form, light, and motion. Grief does not vanish but settles into something enduring, a proof of love that evolves with time,",
      lineDesigners: "Amy Cha",
    },
    {
      lineName: "Persistence",
      lineTagline: "Memory is the material of the future",
      lineDescription: "Persistence is focused on the ways in which nostalgia dictates our views of the future and influences the creation of it. The past, present, and future are materialized in our clothing through forms dedicated to memories that we carry through time, and examining how they have shaped our lives, and how they will continue to do so. The conclusion of nostalgia for us is how we carry it in our lives, and how we see it shaping the way in which we see and construct the world around us.",
      lineDesigners: "Frank Liu, Nate Neira",
    },
     {
      lineName: "Zamaan",
      lineTagline: "Sunlit memories recalled by moonlight",
      lineDescription: "Rooted in the Islamic understanding of time as something to live in and be remembered, Zaman explores how nostalgia reshapes the past, transforming fleeting moments into something sacredly eternal. Every day, we live our lives in the glare of the sun and recall them in the glow of the moon; on one hand, our memories embody the sun: raw, immediate, and grounded in reality; on the other hand, our memories are reflected in the moon: softened, reflective, and distant. Together, they move through space as time does—endless, circular, and unresolved. Zaman honors where we begin while revealing how nostalgia bends the past, polishing even its sharpest edges into something emotional and enduring.",
      lineDesigners: "Aziza Norkulova",
    },   
  ];
  const content = lineContent[(lineNumber - 13) % lineContent.length];
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
            <A4LinesContent 
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


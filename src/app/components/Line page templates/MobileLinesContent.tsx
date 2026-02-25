"use client";
import "@/app/components/Line page templates/linespages.css";
import "@/app/components/LinesList/lines.css";


interface MobileLinesContentProps {
  lineName: string;
  lineTagline: string;
  lineDescription: string;
  lineDesigners: string;
}
export default function MobileLinesContent({ lineName, lineTagline, lineDescription, lineDesigners }: MobileLinesContentProps) {
  return (
    <div className="grid350vh whitebg linespgGrid">
      <div className="em1row rowGrid">
        <div className="landingCell xs-cell" />
        <div className="landingCell percent90-cell" />
        <div className="landingCell xs-cell" />
      </div>

      <div className="em1row rowGrid">
        <div className="landingCell xs-cell" />
        <div className="landingCell percent90-cell" />
        <div className="landingCell xs-cell" />
      </div>

      <div className="l-row rowGrid">
        <div className="landingCell xs-cell" />
        <div className="landingCell percent90-cell"> 
            <img
              src={`/line_images/${lineName}-1.png`}
              alt="line image"
              className="lineImage"
            />     
        </div>        
      <div className="landingCell xs-cell" />
      </div>


      <div className="l-row rowGrid">
        <div className="landingCell xs-cell" />
        <div className="landingCell percent90-cell">
            <div className=" flex32gapcol">
              <div className="flex0gapcol">
                <h1>{lineName}</h1>
                <h5>{lineDesigners}</h5>          
              </div>
              <h4 className="allcaps">{lineTagline}</h4>
              <p>{lineDescription}</p>          
            </div>             
        </div> 
        <div className="landingCell xs-cell" />
      </div>

      <div className="l-row rowGrid">
        <div className="landingCell xs-cell" />
        <div className="landingCell percent90-cell">   
            <img
              src={`/line_images/${lineName}-2.png`}
              alt="line image"
              className="lineImage"
            />             
        </div> 
        <div className="landingCell xs-cell" />
      </div>

      <div className="l-row rowGrid">
        <div className="landingCell xs-cell" />
        <div className="landingCell percent90-cell"> 
            <img
              src={`/line_images/${lineName}-3.png`}
              alt="line image"
              className="lineImage"
            />                    
        </div>
        <div className="landingCell xs-cell" />
      </div>      

      <div className="em1row rowGrid">
        <div className="landingCell xs-cell" />
        <div className="landingCell percent90-cell" />
        <div className="landingCell xs-cell" />
      </div>

      <div className="em1row rowGrid">
        <div className="landingCell xs-cell" />
        <div className="landingCell percent90-cell" />
        <div className="landingCell xs-cell" />
      </div>


    </div>
    

  );
}

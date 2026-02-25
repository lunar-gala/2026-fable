"use client";
import "@/app/components/About/about.css";
import "@/app/components/Line page templates/linespages.css";

interface A2LinesContentProps {
  lineName: string;
  lineTagline: string;
  lineDescription: string;
  lineDesigners: string;
}

export default function A2LinesContent({ lineName, lineTagline, lineDescription, lineDesigners }: A2LinesContentProps) {
  return (
    <div className="grid100vh linesPageGrid">
      <div className="xs-row rowGridContent">
        <div className="homeCell-content xs-cell c1" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content l-cell c4" />
        <div className="homeCell-content xs-cell c5" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content xs-cell c1" />
      </div>

      <div className="xs-row rowGridContent">
        <div className="homeCell-content xs-cell c1" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content l-cell c4" />
        <div className="homeCell-content xs-cell c5" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content xs-cell c1" />
      </div>


      <div className="xl-row rowGridContent">
        <div className="homeCell-content xs-cell c1" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content col2cell c4">
          <div className="lineImgContainer">
            <img
              src={`/line_images/${lineName}-1.png`}
              alt="line image"
              className="lineImage"
            />
          </div>
        </div>
        <div className="homeCell-content xs-cell c6" />
        <div className="flexbottom homeCell-content l-cell c6">
          <h5>{lineDesigners}</h5>           
        </div>
        <div className="homeCell-content xs-cell c6" />
        <div className="flex4gapcol homeCell-content l-cell c6">
          <div className="spacer50 w100">
            
          </div> 
          <p className="linedescription">{lineDescription}</p>
        </div>
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content xs-cell c1" />
      </div>
      
      <div className="l-row rowGridContent">
        <div className="homeCell-content xs-cell c1" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content l-cell c4" />
        <div className="homeCell-content xs-cell c5" />
        <div className="homeCell-content col2cell c4">
            <div className=" flex32gapcol a1LineHeading">
              <h1>{lineName}</h1>
             <h4 className="spacer50w allcaps">{lineTagline}</h4>
            </div>
        </div>
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6">
          <div className="lineImgContainer">
            <img
              src={`/line_images/${lineName}-2.png`}
              alt="line image"
              className="lineImage"
            />
          </div>
        </div>
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content xs-cell c1" />
      </div>


      <div className="l-row rowGridContent">
        <div className="homeCell-content xs-cell c1" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content l-cell c4" />
        <div className="homeCell-content xs-cell c5" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6">
          <div className="lineImgContainer">
            <img
              src={`/line_images/${lineName}-3.png`}
              alt="line image"
              className="lineImage"
            />
          </div>
        </div>
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content xs-cell c1" />
      </div>

      <div className="xs-row rowGridContent">
        <div className="homeCell-content xs-cell c1" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content l-cell c4" />
        <div className="homeCell-content xs-cell c5" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content xs-cell c1" />
      </div>

      <div className="xs-row rowGridContent">
        <div className="homeCell-content xs-cell c1" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content l-cell c4" />
        <div className="homeCell-content xs-cell c5" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c6" />
        <div className="homeCell-content l-cell c6" />
        <div className="homeCell-content xs-cell c3" />
        <div className="homeCell-content xs-cell c1" />
      </div>
    </div>
  );
}

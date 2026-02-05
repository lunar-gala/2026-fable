import '../Landing/LandingAnimation.css';
import './Teaser.css';



export default function CountdownTeaser() {


  return  <div className="gradient-grid">
            <div className="row-full">
                 <div className="landing-col-s"></div>  
                <div className="landing-col-s"></div> 
                <div className="landing-col-half"></div> 
                <div className="landing-col-s"></div> 
                <div className="landing-col-s"></div>
                <div className="landing-col-full">
                    <div className="teaser-text">00:00:00</div>
                </div>
                <div className="landing-col-s"></div>
                <div className="landing-col-s"></div> 
                <div className="landing-col-half"></div> 
                <div className="landing-col-s"></div>
                <div className="landing-col-s"></div>
            </div>

        </div>
    
   ;
}


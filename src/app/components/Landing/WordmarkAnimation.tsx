import Lottie from "react-lottie";
import animationData from "../../../../public/wordmark.json";
import './LandingAnimation.css';

function WordmarkAnimation() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return  <div className="wordmarkAnimation"> <Lottie options={defaultOptions} /> </div>
   ;
}

export default WordmarkAnimation;
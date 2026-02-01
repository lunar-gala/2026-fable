import Lottie from "react-lottie";
import animationData from "../../../../public/landingasset.json";
import './LandingAnimation.css';


function LandingAssetAnimation() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <div className="landingAssetAnimation"> <Lottie options={defaultOptions} /> </div>
   ;
}

export default LandingAssetAnimation;



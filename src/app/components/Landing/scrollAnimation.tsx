/*
import { gsap } from "gsap";
import  { ScrollTrigger } from "gsap/ScrollTrigger";

LottieScrollTrigger({
 target: "#animationWindow",
 path: "https://assets.codepen.io/35984/tapered_hello.json",
 speed: "medium",
 scrub: 2 // seconds it takes for the playhead to "catch up"
 // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
 // you can pass in a "timeline" that has existing animations in it, and LottieScrollTrigger will play that alongside the Lottie animation
 // you can pass a startFrameOffset and/or endFrameOffset to cause the playhead to start/end at a different frame. 
});


function LottieScrollTrigger(vars) {
  let playhead = { frame: vars.startFrameOffset || 0 },
    target = gsap.utils.toArray(vars.target)[0],
    speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
    st = {
      trigger: target,
      pin: true,
      start: "top top",
      end: speeds[vars.speed] || "+=1000",
      scrub: 1
    },
    ctx = gsap.context && gsap.context(),
    animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || "svg",
      loop: false,
      autoplay: false,
      path: vars.path,
      rendererSettings: vars.rendererSettings || {
        preserveAspectRatio: "xMidYMid slice"
      }
    }),
    frameAnimation;
  for (let p in vars) {
    // let users override the ScrollTrigger defaults
    st[p] = vars[p];
  }
  frameAnimation = vars.timeline || gsap.timeline({ scrollTrigger: st });
  if (vars.timeline && !vars.timeline.vars.scrollTrigger) {
    // if the user passed in a timeline that didn't have a ScrollTrigger attached, create o

    */
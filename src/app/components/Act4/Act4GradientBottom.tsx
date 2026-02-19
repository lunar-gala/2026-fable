"use client";
import './act4Animation.css';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid, lol 
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function Act4GradientBottom() {

  return (
    <>
        <div className='rowGrid'>
          <div className='a4-gradient-v1 homeCell-content xl-cell c1'></div>
          <div className='homeCell-content l-cell c2'></div>
          <div className='homeCell-content m-cell c3'></div>
          <div className='a4-gradient-v1 homeCell-content s-cell c4'></div>
          <div className='a4-gradient-v1 homeCell-content xs-cell c5'></div>
          <div className='a4-gradient-v2 homeCell-content xs-cell c6'></div>
          <div className='a4-gradient-v2 homeCell-content xs-cell c6'></div>
          <div className='a4-gradient-v1 homeCell-content xs-cell c5'></div>
          <div className='a4-gradient-v1 homeCell-content s-cell c4'></div>
          <div className='homeCell-content m-cell c3'></div>
          <div className='homeCell-content l-cell c2'></div>
          <div className='a4-gradient-v1 homeCell-content xl-cell c1'></div>
        </div>         
    </>

                                        

  );
}

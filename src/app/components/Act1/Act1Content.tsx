"use client";
import './act1Animation.css';
import '../Landing/LandingAnimation.css';
import LineButton from '../LineButton';

// for the actual content on the pg (countdown, info, etc),
// just made a second grid on top of the og grid, lol
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function Act1Content() {

  return (
    <>
    <div className='a1grid gradient-grid'>
        {/* Row 1: xs-row */}
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 2: xs-row */}
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 3: s-row — Frame 36 in right l-cell (c5) */}
        <div className='s-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content l-cell c5'>
            
            </div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 4: m-row — Lustre in right xl-cell (c6) */}
        <div className='m-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'>
                <a href="/lines/act1?line=2" className='desktop-only'>
                    <LineButton name="Lustre" number={2} act={1} gradientDir="vertical" align="right" />
                </a>            
            </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 5: l-row — Nurture in Layers in left xl-cell (c6) */}
        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'>
                <h3 className="content-act-label">ACT I</h3>
            </div>
            <div className='homeCell-content xl-cell c6'> 
                         
            </div>
            <div className='homeCell-content l-cell c5'>
                 <a href="/lines/act1?line=1" className='desktop-only'>
                    <LineButton name="Frame 36" number={1} act={1} gradientDir="horizontal" align="left" />
                </a>                  
            </div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 6: xl-row */}
        <div className='xl-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
   
            <div className='homeCell-content xl-cell c6'>
                <a href="/lines/act1?line=3" className='desktop-only'>
                    <LineButton name="Nurture in Layers" number={3} act={1} gradientDir="horizontal" align="left" />
                </a>  
                <span className="mobile-only content-big-label fix2top">Follow</span>
                     
            </div>
            <div className='homeCell-content xl-cell c6'>
         
            </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 7: xl-row — Becoming in left xl-cell (c6) */}
        <div className='xl-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'>
                <span className="desktop-only content-big-label">Follow</span>
            </div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 8: l-row */}
        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'>
             <a href="/lines/act1?line=4" className='desktop-only'>
                <LineButton name="Becoming" number={4} act={1} gradientDir="horizontal" align="right" />
            </a> 
            </div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 9: m-row */}
        <div className='m-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 10: s-row */}
        <div className='s-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'>
                 <div className='rectangle200percent flex0gapcol' id="  ">
                    <a href="/lines/act1?line=1" className='mobile-only' id="  ">
                        <LineButton name="Frame 36" number={1} act={1} gradientDir="horizontal" align="left" />
                    </a>               
                    <a href="/lines/act1?line=2" className='mobile-only' id="  ">
                        <LineButton name="Lustre" number={2} act={1} gradientDir="vertical" align="right" />
                    </a>                          
                    <a href="/lines/act1?line=3" className='mobile-only' id="  ">
                        <LineButton name="Nurture in Layers" number={3} act={1} gradientDir="horizontal" align="left" />
                    </a>   
                    <a href="/lines/act1?line=4" className='mobile-only' id="  ">
                        <LineButton name="Becoming" number={4} act={1} gradientDir="horizontal" align="right" />
                    </a>                                                                                                      
                 </div>                  
            </div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 11: xs-row */}
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 12: xs-row */}
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>
    </div>
    </>



  );
}

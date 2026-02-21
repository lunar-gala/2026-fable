"use client";
import './act2Animation.css';
import LineButton from '../LineButton';

// for the actual content on the pg (countdown, info, etc),
// just made a second grid on top of the og grid, lol
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function Act2Content() {

  return (
    <>
    <div className='gradient-grid'>
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
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 3: s-row */}
        <div className='s-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 4: m-row */}
        <div className='m-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'>
              <a href="/lines/act2?line=5" className="desktop-only">
                <LineButton name="Joie de Vivre" number={5} act={2} gradientDir="horizontal" align="left" />
             </a>                
            </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 5: l-row */}
        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'>
                <h3 className="desktop-only content-act-label">ACT II</h3>
            </div>
            <div className='homeCell-content xl-cell c6'>
                <h3 className="mobile-only content-act-label">ACT II</h3>
                
            </div>
            
            <div className='homeCell-content xl-cell c6'>
               <a href="/lines/act2?line=6" className='desktop-only'>
                <LineButton name="Whispers Before Sleep" number={6} act={2} gradientDir="vertical" align="right" />
             </a>  
            </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'></div>
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
            <div className='homeCell-content l-cell c5'>

            </div>
            <div className='homeCell-content xl-cell c6'>
                <span className="content-big-label">Wander</span>
            </div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 7: xl-row — Read Me a Story in left xl-cell (c6) */}
        <div className='xl-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'>
                <a href="/lines/act2?line=7" className='desktop-only'>
                    <LineButton name="Read Me a Story" number={7} act={2} gradientDir="vertical" align="right" />
                </a>                 
            </div>
            <div className='homeCell-content xl-cell c6'> </div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content m-cell c4'> </div>
            <div className='homeCell-content s-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        {/* Row 8: l-row — re(veliar) in right xl-cell (c6) */}
        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>
            <div className='homeCell-content xs-cell c2'></div>
            <div className='homeCell-content s-cell c3'></div>
            <div className='homeCell-content m-cell c4'></div>
            <div className='homeCell-content l-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>
            <div className='homeCell-content xl-cell c6'>
                 <a href="/lines/act2?line=8" className='desktop-only'>
                    <LineButton name="Re(veliar)" number={8} act={2} gradientDir="horizontal" align="left" />
                </a>                 
            </div>
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
            <div className=' homeCell-content xl-cell c6'>
                <div className='rectangle200percent flex0gapcol' id="pointereventoff">
                    <a href="/lines/act2?line=5" className=" mobile-only" id="pointereventoff">
                        <LineButton name="Joie de Vivre" number={5} act={2} gradientDir="horizontal" align="left" verticalAlign='top'/>
                    </a>  
                    <a href="/lines/act2?line=6" className='mobile-only' id="pointereventoff">
                        <LineButton name="Whispers Before Sleep" number={6} act={2} gradientDir="vertical" align="right" />
                    </a>                          
                    <a href="/lines/act2?line=7" className='mobile-only' id="pointereventoff" >
                        <LineButton name="Read Me a Story" number={7} act={2} gradientDir="vertical" align="right" />
                    </a> 
                    <a href="/lines/act2?line=8" className='mobile-only' id="pointereventoff">
                        <LineButton name="Re(veliar)" number={8} act={2} gradientDir="horizontal" align="left" />
                    </a>                                                                                                       
                </div>   
            </div>
            <div className=' homeCell-content xl-cell c6'> </div>
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

"use client";
import './act4Animation.css';
import LineButton from '../LineButton';

// Content overlay grid for Act 4 (reversed grid, same as Act 3)
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function Act4Content() {

  return (
    <>
    <div className='gradient-grid a3grid'>
        {/* Row 1: xl-row */}
        <div className='xl-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'>
                <h3 className="desktop-only content-act-label" style={{ color: 'var(--off-white)' }}>ACT IV</h3>
            </div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 2: l-row */}
        <div className='l-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'>
                <a href="/lines/act4?line=15" className="desktop-only">
                    <LineButton name="Vestige" number={15} act={4} gradientDir="horizontal" align="left" verticalAlign="top" />
                 </a>                 
            </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'>
                <span className="desktop-only content-big-label" style={{ color: 'var(--off-white)' }}>Discern</span>
            </div>
        </div>

        {/* Row 3: m-row */}
        <div className='m-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'> </div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 4: s-row — Persistence in left m-cell (c3) */}
        <div className='s-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'>
                 <a href="/lines/act4?line=14" className="desktop-only">
                <LineButton name="Lethe" number={14} act={4} gradientDir="horizontal" align="left" />
                 </a>                  
            </div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 5: xs-row */}
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 6: xs-row */}
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 7: xs-row */}
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 8: xs-row */}
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 9: s-row — Echo in right xl-cell (c1) */}
        <div className='s-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 10: m-row — Zamaan in left m-cell (c3) */}
        <div className='m-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'>
                <a href="/lines/act4?line=16" className="desktop-only">
                <LineButton name="Persistence" number={16} act={4} gradientDir="horizontal" align="right" />
                 </a>                  
            </div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>

        {/* Row 11: l-row */}
        <div className='l-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'>
                      <div className='rectangle200percent flex0gapcol'>
                        <a href="/lines/act4?line=13" className="mobile-only">
                            <LineButton name="Echo" number={13} act={4} gradientDir="horizontal" align="left" />
                        </a>  
                        <a href="/lines/act4?line=14" className="mobile-only">
                            <LineButton name="Lethe" number={14} act={4} gradientDir="vertical" align="left" />
                        </a>   
                        <a href="/lines/act4?line=15" className="mobile-only">
                            <LineButton name="Vestige" number={15} act={4} gradientDir="horizontal" align="left" verticalAlign="top" />
                        </a>                                                    
                        <a href="/lines/act4?line=16" className="mobile-only">
                            <LineButton name="Persistence" number={16} act={4} gradientDir="horizontal" align="right" />
                        </a>                         
                        <a href="/lines/act4?line=17" className="mobile-only">
                            <LineButton name="Zamaan" number={17} act={4} gradientDir="vertical" align="right" />
                        </a>                                                   
                    </div>                  
            </div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content xl-cell c1'>
                <a href="/lines/act4?line=13" className="desktop-only">
                <LineButton name="Echo" number={13} act={4} gradientDir="horizontal" align="left" />
                 </a>                  
            </div>
        </div>

        {/* Row 12: xl-row */}
        <div className='xl-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'></div>
            <div className='homeCell-content m-cell c3'></div>
            <div className='homeCell-content s-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c6'>            
            </div>
            <div className='homeCell-content xs-cell c6'> </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content s-cell c4'> </div>
            <div className='homeCell-content m-cell c3'> </div>
            <div className='homeCell-content l-cell c2'>
                <a href="/lines/act4?line=17" className="desktop-only">
                <LineButton name="Zamaan" number={17} act={4} gradientDir="vertical" align="right" />
                 </a>  
            </div>
            <div className='homeCell-content xl-cell c1'></div>
        </div>
    </div>
    </>



  );
}

"use client";
import './act1Animation.css';
import LineButton from '../LineButton';

// for the actual content on the pg (countdown, info, etc),
// just made a second grid on top of the og grid, lol
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function Act1Content() {

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
            <div className='homeCell-content l-cell c5'></div>
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
            <LineButton name="Frame 36" number={1} act={1} gradientDir="horizontal" align="left" />
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
                <span className="content-act-label">ACT I</span>
            </div>
            <div className='homeCell-content xl-cell c6'> 
                <LineButton name="Lustre" number={2} act={1} gradientDir="vertical" align="right" />
            </div>
            <div className='homeCell-content l-cell c5'></div>
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
                <LineButton name="Nurture in Layers" number={3} act={1} gradientDir="horizontal" align="left" />
            </div>
            <div className='homeCell-content xl-cell c6'> </div>
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
                <span className="content-big-label">Follow</span>
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
                <LineButton name="Becoming" number={4} act={1} gradientDir="horizontal" align="right" />
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
            <div className='homeCell-content xl-cell c6'></div>
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

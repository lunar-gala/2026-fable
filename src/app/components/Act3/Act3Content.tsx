"use client";
import './act3Animation.css';
import LineButton from '../LineButton';

// for the actual content on the pg (countdown, info, etc),
// just made a second grid on top of the og grid, lol
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function Act3Content() {

  return (
    <>
    <div className='gradient-grid a3grid'>
        {/* Row 1: xl-row — Eden in right xl-cell (c2) */}
        <div className='xl-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'>
            <LineButton name="Eden" number={9} act={3} gradientDir="horizontal" align="right" />
            </div>
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

        {/* Row 2: l-row — Omoide in left l-cell (c2) */}
        <div className='l-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'></div>
            <div className='homeCell-content l-cell c2'>
                <LineButton name="Omoide" number={10} act={3} gradientDir="horizontal" align="left" />
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

        {/* Row 3: m-row */}
        <div className='m-row rowGridContent'>
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

        {/* Row 4: s-row — Jangal in right xl-cell (c1) */}
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

        {/* Row 9: s-row */}
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
            <div className='homeCell-content xl-cell c1'>
                <LineButton name="Jangal" number={11} act={3} gradientDir="horizontal" align="left" />
            </div>
        </div>

        {/* Row 10: m-row */}
        <div className='m-row rowGridContent'>
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
            <div className='homeCell-content xl-cell c1'>
                <span className="content-act-label" style={{ color: 'var(--off-white)' }}>ACT III</span>
            </div>
        </div>

        {/* Row 11: l-row */}
        <div className='l-row rowGridContent'>
            <div className='homeCell-content xl-cell c1'>
                <LineButton name="Faint Blossom" number={12} act={3} gradientDir="horizontal" align="right" />
            </div>
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
            <div className='homeCell-content xl-cell c1'>
                <span className="content-big-label" style={{ color: 'var(--off-white)' }}>Trace</span>
            </div>
        </div>

        {/* Row 12: xl-row */}
        <div className='xl-row rowGridContent'>
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
    </div>
    </>



  );
}

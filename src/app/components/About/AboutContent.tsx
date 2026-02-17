"use client";
import '@/app/components/About/about.css';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid, lol 
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function AboutContent() {

  return (
    <>
    <div>
        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>
        <div className='vh50-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content rectangle-200 c6'>
                <h1>Fables are the stories and lessons that we carry, pass down, retell, and reimagine. </h1>
            </div>            
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>


        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> 
                <p>LG: Fable is an anthology of the fantastical worlds that color our identities, stepping through imaginations, and memories across people, times, and spaces. </p>
            </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='bottomAlignedFlex homeCell-content xs-cell c4'>
                <h4>1</h4>
            </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='bottomAlignedFlex homeCell-content xl-cell c6'>
                <h4 className='allcaps'>About the Show</h4>
            </div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'>
                <h2>LG: Fable is a story in four parts: Follow, Wander, Trace, and Discern.</h2>
            </div>            
            <div className='homeCell-content xl-cell c6'> 
                <p>The show guides us through the conflict between our roots and our futures. Each line provides a perspective on what it means and
how it feels to learn and grow.</p>
            </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        <div className='vh50-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content rectangle-200 c6'>
                <img src="/placeholder.png" alt="placeholder" className='img16by9'/>
            </div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='bottomAlignedFlex homeCell-content xs-cell c4'>
                <h4>2</h4>
            </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='bottomAlignedFlex homeCell-content xl-cell c6'>
                <h4 className='allcaps'>Window & Core Motif</h4>
            </div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content rectangle-200 c6'>
                <h2>In Chinese culture, decorative garden windows <span id="chinesetypeh2">(漏窗)</span>  create glimpses into other
worlds.</h2>
            </div>           
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

        <div className='vh50-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content rectangle-200 c6'>
                <img src="/placeholder.png" alt="placeholder" className='img16by9'/>
            </div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

         <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'>
                <h2>The complex window patterns frame the gaze and create visual balance across the space.</h2>
            </div>            
            <div className='homeCell-content xl-cell c6'> 
                <p>For the 30th anniversary of Lunar Gala, originally a Taiwanese Student Association event, we invite you to peer through the Fable window and witness the stories, memories, and lessons that define us.</p>
            </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>
        </div>

        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='bottomAlignedFlex homeCell-content xs-cell c4'>
                <h4>3</h4>
            </div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='bottomAlignedFlex homeCell-content xl-cell c6'>
                <h4 className='allcaps'>Process</h4>
            </div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

         <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

         <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

         <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

         <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

         <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>

        <div className='vh25-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xl-cell c6'></div>            
            <div className='homeCell-content xl-cell c6'> </div>             
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content xs-cell c4'> </div>
            <div className='homeCell-content l-cell c3'> </div>
            <div className='homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content xs-cell c1'></div>           
        </div>                                                        

    </div> 
    </>

                                        

  );
}

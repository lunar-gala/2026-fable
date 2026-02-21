"use client";
import './LandingAnimation.css';
import { useState, useEffect } from 'react';
import WordmarkAnimation from './WordmarkAnimation';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function LandingContent() {

  return (
    <div className='landing gradient-grid'>
    
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'></div>            
            <div className='homeCell-content rectangle-full c6'> </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>           
        </div>

        <div className='xs-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'></div>            
            <div className='homeCell-content rectangle-full c6'> </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>     
        </div> 

        <div className='s-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'></div>            
            <div className='homeCell-content rectangle-full c6'> </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>             
        </div> 

        <div className='m-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'></div>            
            <div className='homeCell-content rectangle-full c6'> </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>                     
        </div> 

        <div className='l-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'></div>            
            <div className='homeCell-content rectangle-full c6'>
                <div className='mobile-only'>
                    <h4 className='allcaps'>Wiegand Gym</h4>
                </div>
            </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>      
        </div>  


        <div className=' row-center rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-200  fulltext-gridcell'>
                <div className='wordmarkContainer'><WordmarkAnimation/></div>
                <div className='bottomAlignFlex mobile-only'>
                    <h4 className='allcaps'>Sunday <br/>March 15<br/>7PM </h4>
                </div>
            </div>            
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>         
        </div>  

        <div className='l-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'>
                 <a href="https://cglink.me/2c1/r1935471" className='buyticketsbutton' style={{pointerEvents: 'auto'}}>
                    <div className='ticketbuttoncontent'>
                        <div className='desktop-only ticketbuttonheading'>Buy Tickets Now</div>
                        <p className="desktop-only">Sunday, March 15 @ 7PM <br/> Wiegand Gym </p>
                        <h4 className=' mobile-only ticketbuttonheading' >Buy Tickets </h4>
                    </div>
                    <img className=" desktop-only assetshape" src="/asset cutout light.svg"></img>
                </a>  
            </div>            
            <div className='homeCell-content rectangle-full c6'>
                 <a href="https://cglink.me/2c1/r1935471" className='mobile-only assetonlybutton' style={{pointerEvents: 'auto'}}>
                    <div className='w100h100 off-white-bg'></div>
                    <img className="assetshape" src="/asset cutout light.svg"></img>
                </a>                  
            </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>    
        </div>   

        <div className='m-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'>
                 <div className='bottomAlignFlex mobile-only'>
                    <p className="caption">Best viewed on desktop.</p>
                </div>   
            </div>            
            <div className='homeCell-content rectangle-full c6'> 
            </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>              
        </div>  

        <div className='s-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'></div>            
            <div className='homeCell-content rectangle-full c6'> </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>           
        </div> 

        <div className='xs-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'></div>            
            <div className='homeCell-content rectangle-full c6'> </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>         
        </div>    
        
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-full c6'></div>            
            <div className='homeCell-content rectangle-full c6'> </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>          
        </div>    
    </div>

                                        

  );
}

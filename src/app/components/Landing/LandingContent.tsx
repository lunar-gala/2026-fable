"use client";
import './LandingAnimation.css';
import { useState, useEffect } from 'react';
import WordmarkAnimation from './WordmarkAnimation';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function LandingContent() {

  return (
    <div className='gradient-grid'>
    
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
            <div className='homeCell-content rectangle-full c6'> </div>             
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>      
        </div>  


        <div className='row-center rowGridContent'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-200  fulltext-gridcell'>
                <div className='wordmarkContainer'><WordmarkAnimation/></div>
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
                 <a href="https://cglink.me/2c1/r1935471" className='buyticketsbutton'>
                    <div className='ticketbuttoncontent'>
                        <div className='ticketbuttonheading'>Buy Tickets Now</div>
                        <p>Sunday, March 15 @ 7PM <br/> Wiegand Gym </p>
                    </div>
                    <img className="assetshape" src="/asset cutout light.svg"></img>
                </a>               
            </div>            
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

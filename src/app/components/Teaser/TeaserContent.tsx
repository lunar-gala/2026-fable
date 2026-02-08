"use client";
import '../Landing/LandingAnimation.css';
import './Teaser.css';
import { useState, useEffect } from 'react';
import Countdown from './Countdown';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function TeaserContent() {


    useEffect(() => {
        const cells = document.querySelectorAll(".gradient-vertical");
        const maxDelay = 2;
        cells.forEach((cell) => {
            const randomDelay = Math.random() * maxDelay;
            (cell as HTMLElement).style.animationDelay = `${randomDelay}s`;
        });
    }, []);

  return (
    <>
        <div className='row24px'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>           
        </div>

        <div className='row24px'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>     
        </div> 

        <div className='row-eighth'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>             
        </div> 

        <div className='row-quarter'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>                     
        </div> 

        <div className='row-half'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>      
        </div>  


        <div className='row-full'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-200 c6 center-container '>
                <Countdown/>
            </div>            
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>         
        </div>  

        <div className='row-half'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> 
                <div className='off-white-bg fulltext-gridcell'>
                    <h2>Tickets Release 02.20</h2>
                    <p>Sunday, March 15 @ 7PM<br/>Wiegand Gym</p>
                </div>

            </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small'></div>    
        </div>   

        <div className='row-quarter'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>              
        </div>  

        <div className='row-eighth'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>           
        </div> 

        <div className='row24px'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>         
        </div>    
        
        <div className='row24px'>
            <div className='landingCell rectangle-small c1'></div>          
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell half-eighth c3'></div>
            <div className='landingCell rectangle-small c4'></div>
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell full-full c6'></div>            
            <div className='landingCell full-full c6'> </div>             
            <div className='landingCell rectangle-small c5'></div>
            <div className='landingCell rectangle-small c4'> </div>
            <div className='landingCell half-eighth c3'> </div>
            <div className='landingCell rectangle-small c2'></div>          
            <div className='landingCell rectangle-small c1'></div>          
        </div>    
    </>

                                        

  );
}

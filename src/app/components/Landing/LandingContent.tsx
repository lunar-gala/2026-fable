"use client";
import './LandingAnimation.css';
import { useState, useEffect } from 'react';
import WordmarkAnimation from './WordmarkAnimation';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid,,, not sure if there's moreefficient way to do it
export default function LandingContent() {

  return (
    <>
        <div className='row24px'>
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

        <div className='row24px'>
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

        <div className='row-eighth'>
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

        <div className='row-quarter'>
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

        <div className='row-half'>
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


        <div className='row-full'>
            <div className='homeCell-content rectangle-small c1'></div>          
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-half c3'></div>
            <div className='homeCell-content rectangle-small c4'></div>
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-200 fulltext-gridcell'>
                <WordmarkAnimation/>
            </div>            
            <div className='homeCell-content rectangle-small c5'></div>
            <div className='homeCell-content rectangle-small c4'> </div>
            <div className='homeCell-content rectangle-half c3'> </div>
            <div className='homeCell-content rectangle-small c2'></div>          
            <div className='homeCell-content rectangle-small c1'></div>         
        </div>  

        <div className='row-half'>
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

        <div className='row-quarter'>
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

        <div className='row-eighth'>
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

        <div className='row24px'>
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
        
        <div className='row24px'>
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
    </>

                                        

  );
}

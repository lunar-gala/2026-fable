"use client";
import '../Landing/LandingAnimation.css';
import './Teaser.css';
import { motion, useScroll, useTransform } from "motion/react";


import { useState, useEffect } from 'react';
import Countdown from './Countdown';

export default function TeaserGradientAnimation2() {


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
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>           
        </div>

        <div className='row24px'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>    
        </div> 

            <div className='row-eighth'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>            
        </div> 

        <div className='row-quarter'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>                   
        </div> 

        <div className='row-half'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>    
        </div>  


        <div className='row-full'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-200'>
                <Countdown/>
            </div>            
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>         
        </div>  

        <div className='row-half'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> 
                <div className='off-white-bg fulltext-gridcell'>
                    <h2>Tickets Release 02.20</h2>
                    <p>Sunday, March 15 @ 7PM<br/>Wiegand Gym</p>
                </div>

            </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>    
        </div>   

        <div className='row-quarter'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>            
        </div>  

        <div className='row-eighth'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>            
        </div> 

            <div className='row48px'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>   
        </div> 

        <div className='row24px'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
        </div>    
        
        <div className='row24px'>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-half'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-full'></div>            
            <div className='landingCell rectangle-full'> </div>             
            <div className='landingCell rectangle-small'></div>
            <div className='landingCell rectangle-small'> </div>
            <div className='landingCell rectangle-half'> </div>
            <div className='landingCell rectangle-small'></div>          
            <div className='landingCell rectangle-small'></div>          
        </div>    
    </>

                                        

  );
}

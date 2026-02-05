"use client";
import '../Landing/LandingAnimation.css';
import { motion, useScroll, useTransform } from "motion/react";


import { useState, useEffect } from 'react';

export default function TeaserGradientAnimation2() {

/*
    useEffect(() => {
        const cells = document.querySelectorAll(".gradient-vertical");
        const maxDelay = 2;
        cells.forEach((cell) => {
            const randomDelay = Math.random() * maxDelay;
            (cell as HTMLElement).style.animationDelay = `${randomDelay}s`;
        });
    }, []);
*/
  return (
    <>
        <div className='gradient-grid'>
            <div className='row24px'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical" id={"gradient-animation-v1 "}></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>
            <div className='row24px'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>        
             <div className='row-eighth'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div> 
            <div className='row-quarter'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>   
            <div className='row-half'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>  
            <div className='row-full'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>  
            <div className='row-half'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>             
            <div className='row-quarter'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>                                                
            <div className='row-eighth'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div> 
             <div className='row48px'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div> 
            <div className='row24px'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>    
            <div className='row24px'>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>            
                <div className='landingCell rectangle-full'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>             
                 <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-half'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>
                <div className='landingCell rectangle-small'>
                    <div className="gradient-vertical gradient-animation-v1"></div>
                </div>          
           </div>    
        </div>
                                        
    </>
  );
}

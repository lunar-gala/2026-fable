"use client";
import '@/app/components/About/about.css';
import '@/app/components/LinesList/lines.css';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid, lol 
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function MobileLinesContent() {

    return (
        <>
        <div className='gradient-grid '>
        <div className='xs-row rowGrid'>
            <div className='homeCell-content xs-cell'></div>         
            <div className='homeCell-content xl-cell  '>
                <div className=' stretchFlex cellContent'>
                    <p className="allcaps  ">Act I</p>
                    <h1 className="shifth1flush">Follow</h1>  
                </div>                  
            </div>  
            <div className='homeCell-content xs-cell  '></div>                                   
        </div>   
        <div className='xs-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '>
                <a href="/lines/act1?line=1" className='cellContent' style={{ pointerEvents: 'auto', display: 'block' }}>
                    <div className='lineContent'>
                        <p className='shiftpdown'>1</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Frame 36</h3>
                            <p className='caption'>Mikayla Gee, Nataniella Essang</p>
                        </div>
                    </div>
                </a>                  
            </div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>   

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>   

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div> 

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  
        
        <div className='xs-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>   

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div> 

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div> 

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div> 

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div> 

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  

        <div className='xs-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>   

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>   
        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  
        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>          
        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  
        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  

        <div className='xs-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>   

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>   
        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  
        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>          
        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  
        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  

        <div className='vh25-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  

        <div className='xs-row rowGrid'>
            <div className='homeCell-content xs-cell  '></div>         
            <div className='homeCell-content xl-cell  '></div>  
            <div className='homeCell-content xs-cell  '></div> 
        </div>  

    </div> 
    </>

                                        

  );
}

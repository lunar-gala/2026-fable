"use client";
import '@/app/components/About/about.css';
// import './././public/line_images/placeholder1.png'

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid, lol 
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function LinesGrid() {

  return (
    <>
    <div className='grid100vh'>
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c3'></div>
            <div className='homeCell-content l-cell c4'></div> 
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content l-cell c6'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content l-cell c6'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content l-cell c6'></div>  
            <div className='homeCell-content xs-cell c3'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div>   

        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c3'></div>
            <div className='homeCell-content l-cell c4'></div> 
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content l-cell c6'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content l-cell c6'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content l-cell c6'></div>  
            <div className='homeCell-content xs-cell c3'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div> 

        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>   
            <div className='homeCell-content xs-cell c3'></div>
            <div className='homeCell-content xl-cell c4'>
                <h1>Line name</h1>  
                <h3>Tagline for line</h3>
            </div> 
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content l-cell c6'>
                <img src="/line_images/placeholder2.png" alt="line image" className='lineImage doubleHeight'/>
            </div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content l-cell c6'>
                <img src="/line_images/placeholder2.png" alt="line image" className='lineImage'/>    
            </div>  
            <div className='homeCell-content xs-cell c3'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div> 

        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c3'></div>
            <div className='homeCell-content xxl-cell c4'>
                <img src="/line_images/placeholder1.png" alt="line image" className='lineImage'/>    
            </div> 
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content l-cell c6'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content l-cell c6'></div>  
            <div className='homeCell-content xs-cell c3'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div> 

        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c3'></div>
            <div className='homeCell-content l-cell c4'></div> 
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content l-cell c6'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content l-cell c6'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content l-cell c6'></div>  
            <div className='homeCell-content xs-cell c3'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div> 

        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c3'></div>
            <div className='homeCell-content l-cell c4'>
                <h4>Firstname, lastname</h4>
            </div> 
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content l-cell c6'>
                <body>bodybodybody</body>
            </div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content l-cell c6'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content l-cell c6'></div>  
            <div className='homeCell-content xs-cell c3'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div>  

        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c3'></div>
            <div className='homeCell-content l-cell c4'></div> 
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content l-cell c6'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content l-cell c6'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content l-cell c6'></div>  
            <div className='homeCell-content xs-cell c3'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div> 

        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div>          
            <div className='homeCell-content xs-cell c3'></div>
            <div className='homeCell-content l-cell c4'></div> 
            <div className='homeCell-content xs-cell c5'></div>
            <div className='homeCell-content l-cell c6'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content l-cell c6'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content l-cell c6'></div>  
            <div className='homeCell-content xs-cell c3'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div> 

    </div> 
    </>

                                        

  );
}

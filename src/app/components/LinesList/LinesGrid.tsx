"use client";
import '@/app/components/About/about.css';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid, lol 
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function LinesGrid() {

  return (
    <>
    <div className='grid100vh whitebg'>
        <div className='xs-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
            <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>   

        <div className='xs-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>   

        <div className='m-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='a1linegradientV landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='a1linegradientV landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='a1linegradientV landingCell m-cell c5'></div>   
            <div className='a1linegradientH landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>   

        <div className='m-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='a1linegradientH landingCell m-cell c7'></div>   
            <div className='a1linegradientV landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className=' landingCell xs-cell c8'></div>  
             <div className='a1linegradientV landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>

        <div className='xs-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>   

        <div className='m-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='a2linegradientH landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='a2linegradientV landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>   

        <div className='m-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='a2linegradientV landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='a2linegradientV landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='a2linegradientH landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>

        <div className='xs-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div> 
        <div className='m-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='a3linegradientH landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='a3linegradientV landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className=' landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='a3linegradientH landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className=' landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>   

        <div className='m-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='a3linegradientH landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='a3linegradientV landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>

        <div className='xs-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div> 
         <div className='m-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='a4linegradientV landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='a4linegradientH landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>   

        <div className='m-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='a4linegradientH landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='a4linegradientH landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='a4linegradientV landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='a4linegradientV landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='a4linegradientV landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>           

        <div className='xs-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>   

        <div className='xs-row rowGrid'>
            <div className='landingCell xs-cell c1'></div> 
            <div className='landingCell xs-cell c2'></div>         
            <div className='landingCell l-cell c3'></div>
            <div className='landingCell xs-cell c4'></div>
            <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c6'></div>  
            <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c8'></div>  
            <div className='landingCell m-cell c9'></div>   
            <div className='landingCell xs-cell c8'></div>  
             <div className='landingCell m-cell c7'></div>   
            <div className='landingCell xs-cell c6'></div>  
             <div className='landingCell m-cell c5'></div>   
            <div className='landingCell xs-cell c4'></div>  
             <div className='landingCell m-cell c3'></div>   
            <div className='landingCell xs-cell c2'></div>                                   
            <div className='landingCell xs-cell c1'></div>
        </div>

    </div> 
    </>

                                        

  );
}

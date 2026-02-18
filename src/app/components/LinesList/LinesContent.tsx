"use client";
import '@/app/components/LinesList/lines.css';

// for the actual content on the pg (countdown, info, etc), 
// just made a second grid on top of the og grid, lol 
// if you add a button make sure to set pointer-event to auto on button since the whole div is set as none rn
export default function LinesGrid() {

  return (
    <>
    <div className='grid100vh'>
        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div> 
            <div className='homeCell-content xs-cell c2'></div>         
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content m-cell c7'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c8'></div>   
            <div className='homeCell-content xs-cell c7'></div>  
            <div className='homeCell-content m-cell c6'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>   
            <div className='homeCell-content xs-cell c2'></div>                                   
            <div className='homeCell-content xs-cell c1'></div>
        </div>   

        <div className='xs-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div> 
            <div className='homeCell-content xs-cell c2'></div>         
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content m-cell c7'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c8'></div>   
            <div className='homeCell-content xs-cell c7'></div>  
            <div className='homeCell-content m-cell c6'></div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>   
            <div className='homeCell-content xs-cell c2'></div>                                   
            <div className='homeCell-content xs-cell c1'></div>
        </div>   

        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div> 
            <div className='homeCell-content xs-cell c2'></div>         
            <div className='homeCell-content l-cell c3'>
                <div className=' stretchFlex cellContent'>
                    <p className="allcaps  ">Act I</p>
                    <h1 className="shifth1flush">Follow</h1>  
                </div>             
            </div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'>
                <div className='cellContent'>
                    <div className='lineContent'>
                        <p className='shiftpdown'>1</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Frame 36</h3>
                            <p className='caption'>Mikayla Gee, Nataniella Essang</p>
                        </div>
                    </div>
                </div>                
            </div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content m-cell c7'>
                <div className="cellContent">
                    <div className='spacer75'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>2</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Lustre</h3>
                            <p className='caption'>Annissa Gao, Milada Kweon</p>
                        </div>
                    </div>  
                </div>                
            </div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c7'>
                <div className="cellContent">
                    <div className='spacer50'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>3</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Nurture in Layers</h3>
                            <p className='caption'>Jules Kwon</p>
                        </div>
                    </div>  
                </div>                 
            </div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content m-cell c5'>
                <div className='cellContent'>
                    <div className='lineContent'>
                        <p className='shiftpdown'>4</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Becoming </h3>
                            <p className='caption'>Allen Chen, Catherine Li</p>
                        </div>
                    </div> 
                </div>                  
            </div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>   
            <div className='homeCell-content xs-cell c2'></div>                                   
            <div className='homeCell-content xs-cell c1'></div>           
        </div>     
    

        <div className='xs-row rowGridContent'>
            <div className=' homeCell-content xs-cell c1'></div>          
            <div className=' homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c7'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'></div> 
            <div className='homeCell-content xs-cell c8'></div>
            <div className='homeCell-content m-cell c7'></div>  
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>     
            <div className='homeCell-content xs-cell c2'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div> 

        <div className='l-row rowGridContent'>
            <div className='homeCell-content xs-cell c1'></div> 
            <div className='homeCell-content xs-cell c2'></div>         
            <div className='homeCell-content l-cell c3'>
                <div className='stretchFlex cellContent'>
                    <p className="allcaps  ">Act II</p>
                    <h1 className="shifth1flush">Wander</h1>  
                </div>                   
            </div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'>
                <div className='cellContent'>
                    <div className='lineContent'>
                        <p className='shiftpdown'>5</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Joie de Vivre</h3>
                            <p className='caption'>Ashley Dai, Annie Marcelino </p>
                        </div>
                    </div>
                </div>                
            </div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content m-cell c7'>
                <div className="cellContent">
                    <div className='spacer50'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>6</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Whispers Before Sleep</h3>
                            <p className='caption'>Tian Zhou, Cara Moe</p>
                        </div>
                    </div>  
                </div>                
            </div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c7'>
                <div className="cellContent">
                    <div className='lineContent'>
                        <p className='shiftpdown'>7</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Read Me A Story</h3>
                            <p className='caption'>Zachary Yoshida</p>
                        </div>
                    </div>  
                </div>                 
            </div>   
            <div className='homeCell-content xs-cell c6'></div>  
            <div className='homeCell-content m-cell c5'>
                <div className='cellContent'>
                    <div className='spacer50'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>8</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Re(veil)ar</h3>
                            <p className='caption'>Farah Daveau, Jason Asiedu</p>
                        </div>
                    </div> 
                </div>                  
            </div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>   
            <div className='homeCell-content xs-cell c2'></div>                                   
            <div className='homeCell-content xs-cell c1'></div>    
        </div>   

        <div className='xs-row rowGridContent'>
            <div className=' homeCell-content xs-cell c1'></div>          
            <div className=' homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c7'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'></div> 
            <div className='homeCell-content xs-cell c8'></div>
            <div className='homeCell-content m-cell c7'></div>  
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>     
            <div className='homeCell-content xs-cell c2'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div>   

        <div className='l-row rowGridContent'>
            <div className=' homeCell-content xs-cell c1'></div>          
            <div className=' homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'>
                <div className='stretchFlex cellContent'>
                    <p className="allcaps  ">Act III</p>
                    <h1 className="shifth1flush">Trace</h1>  
                </div>                   
            </div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'>
            <div className='homeCell-content m-cell c7'>
                <div className="cellContent">
                    <div className='lineContent'>
                        <p className='shiftpdown'>9</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Eden</h3>
                            <p className='caption'>Esther Lin</p>
                        </div>
                    </div>  
                </div>                
            </div>                  
            </div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c7'>
                <div className="cellContent">
                    <div className='spacer50'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>10</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Omoide</h3>
                            <p className='caption'>Sulli Yatabe</p>
                        </div>
                    </div>  
                </div>                  
            </div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'>  
               <div className="cellContent">
                    <div className='lineContent'>
                        <p className='shiftpdown'>11</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Jangal</h3>
                            <p className='caption'>Raj Methi</p>
                        </div>
                    </div>  
                </div>                               
            </div> 
            <div className='homeCell-content xs-cell c8'></div>
            <div className='homeCell-content m-cell c7'></div>             
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c5'>
                <div className="cellContent">
                    <div className='spacer75'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>12</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Faint Blossom</h3>
                            <p className='caption'>Sadie Han, Ashley Park</p>
                        </div>
                    </div>  
                </div>    
            </div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>     
            <div className='homeCell-content xs-cell c2'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div>   

        <div className='xs-row rowGridContent'>
            <div className=' homeCell-content xs-cell c1'></div>          
            <div className=' homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c7'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'></div> 
            <div className='homeCell-content xs-cell c8'></div>
            <div className='homeCell-content m-cell c7'></div>  
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>     
            <div className='homeCell-content xs-cell c2'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div>  


        <div className='l-row rowGridContent'>
            <div className=' homeCell-content xs-cell c1'></div>          
            <div className=' homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'>
                 <div className='stretchFlex cellContent'>
                    <p className="allcaps  ">Act IV</p>
                    <h1 className="shifth1flush">Discern</h1>  
                </div>                   
            </div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'>
                <div className="cellContent">
                    <div className='spacer75'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>13</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Echo</h3>
                            <p className='caption'>Jada Cho, Sydney Lee</p>
                        </div>
                    </div>  
                </div>                   
            </div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c7'>
                <div className="cellContent">
                    <div className='spacer50'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>14</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Lethe</h3>
                            <p className='caption'>Yubo Zhang</p>
                        </div>
                    </div>  
                </div>                   
            </div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'></div> 
            <div className='homeCell-content xs-cell c8'></div>
            <div className='homeCell-content m-cell c7'>
                 <div className="cellContent">
                    <div className='spacer50'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>15</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Vestige</h3>
                            <p className='caption'>Amy Cha</p>
                        </div>
                    </div>  
                </div>                  
            </div>  
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c5'>
                <div className="cellContent">
                    <div className='lineContent'>
                        <p className='shiftpdown'>16</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Persistence</h3>
                            <p className='caption'>Frank Liu, Nate Neira</p>
                        </div>
                    </div>  
                </div>              
            </div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'>
                 <div className="cellContent">
                    <div className='spacer50'></div>
                    <div className='lineContent'>
                        <p className='shiftpdown'>17</p>
                        <div className='lineInfo w300px'>
                            <h3 className='FeatureDisplayCondensed'>Zamaan</h3>
                            <p className='caption'>Aziza Norkulova</p>
                        </div>
                    </div>  
                </div>                 
            </div>     
            <div className='homeCell-content xs-cell c2'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div>   

        <div className='xs-row rowGridContent'>
            <div className=' homeCell-content xs-cell c1'></div>          
            <div className=' homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c7'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'></div> 
            <div className='homeCell-content xs-cell c8'></div>
            <div className='homeCell-content m-cell c7'></div>  
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>     
            <div className='homeCell-content xs-cell c2'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div>    

        <div className='xs-row rowGridContent'>
            <div className=' homeCell-content xs-cell c1'></div>          
            <div className=' homeCell-content xs-cell c2'></div>          
            <div className='homeCell-content l-cell c3'></div>
            <div className='homeCell-content xs-cell c4'></div>
            <div className='homeCell-content m-cell c5'></div> 
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c7'></div>   
            <div className='homeCell-content xs-cell c8'></div>  
            <div className='homeCell-content m-cell c9'></div> 
            <div className='homeCell-content xs-cell c8'></div>
            <div className='homeCell-content m-cell c7'></div>  
            <div className='homeCell-content xs-cell c6'></div>
            <div className='homeCell-content m-cell c5'></div>   
            <div className='homeCell-content xs-cell c4'></div>  
            <div className='homeCell-content m-cell c3'></div>     
            <div className='homeCell-content xs-cell c2'></div>  
            <div className='homeCell-content xs-cell c1'></div>  
        </div>    

    </div> 
    </>

                                        

  );
}

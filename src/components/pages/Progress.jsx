import { useState,useEffect } from 'react';
import '../../css/Progress.css';


const ProgressBar=({progress})=>{
    const [animate,setAnimate]=useState(0);

    useEffect(()=>{setTimeout(()=>setAnimate(progress.progressPercentage)
    ,100)}
        ,[progress]);

    return (

        <div>
            <p>{progress.language}</p>
            <div className="outer" >
        <div className="inner" 
        style={{transform:`translateX(${animate-100}%)`}}
        role='progressbar'
        aria-valuenow={progress.progressPercentage}
        aria-valuemax='100'
        aria-valuemin='0'
        >{animate}%</div>
    </div>
            
        </div>
    )
}

export default ProgressBar;



import React,{useState,useEffect} from 'react';


const StopWatch = ()=>{
    let [time,setTime]= useState(0);
    let [running,SetRunning] =useState(false);
    function formateTime(time){
        let minutes = Math.floor(time /60000).toString().padStart(2,'0');
        let seconds = Math.floor((time %60000)/1000).toString().padStart(2,'0');
        let milliSeconds = Math.floor((time %1000)/10).toString().padStart(2,'0');

        return `${minutes}:${seconds}:${milliSeconds}`;
    }
    useEffect(()=>{
        let timer;
        if(running){
            //Start the Interval: every 10ms, increase time by 10ms
            timer = setInterval(()=>{
                setTime(prevTime =>prevTime+10);
            },10);
        }
        else{
            clearInterval(timer); // if not running clear the interval
        }
        return (()=>clearInterval(timer));
    },[running]);
    return(
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 style={{fontSize:'48px',margin:'5px'}}>{formateTime(time)}</h2>
            <button style={{padding:'10px',margin:'5px',fontSize:'16px',cursor:'pointer'}} onClick={()=>SetRunning(true)}>Start</button>
            <button style= {{padding:'10px',margin:'5px', fontSize:'16px',cursor:'pointer'}} onClick={()=>SetRunning(false)}>Stop</button>
            <button style={{padding:'10px',margin:'5px',fontSize:'16px',cursor:'pointer'}} onClick={()=> {setTime(0) ; SetRunning(false)}}>Reset</button>
            
        </div>
    )
};

export default StopWatch;
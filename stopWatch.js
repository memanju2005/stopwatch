let display=document.getElementById('display');
let mili=0,seconds  = 0, minutes = 0,hours=0;
let isRunning=false;
let timer=null;
function stopWatch()
{
    mili++;
        if(mili===100)
    {
        mili=0;
        seconds++;
    }
    if(seconds===60)
    {
        seconds=0;
        minutes++;
    }
    if(minutes===60)
    {
        minutes=0;
        hours++;    
    }     
    display.textContent=`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}:${mili.toString().padStart(2,'0')}`;
};
startTimer=()=>
{
    if(isRunning)
    {
        return;
    }
    isRunning=true;
    timer=setInterval(stopWatch,10);
};
stopTimer=()=>
{
    if(!isRunning)
    {
        return;
    }
    isRunning=false;
    clearInterval(timer);
};
resetTimer =() =>
{
    isRunning=false;
    hours=0,minutes=0,seconds=0,mili=0;
    display.textContent=`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}:${mili.toString().padStart(2,'0')}`;
}

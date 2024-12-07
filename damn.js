const dis = document.getElementById("d");
let time = null;
let st = 0;
let et = 0;
let isrun =  false;

function start()
{
    if(!isrun)
    {
        st = Date.now() - et
        time = setInterval(update,10)
        isrun = true;
    }
}
function stop()
{
    if(isrun)
    {
        clearInterval(time);
        et = Date.now()-st;
        isrun = false;
    }
}
function reset()
{
    clearInterval(time);
    st = 0;
    et = 0;
    isrun =  false;
    dis.textContent="00:00:00:00";
}
function update()
{
    et = Date.now()-st;
    let h = String(Math.floor(et/(1000*60*60))).padStart(2,"0");
    let m = String(Math.floor(et/(1000*60)%60)).padStart(2,"0");
    let s = String(Math.floor(et/1000%60)).padStart(2,"0");
    let ml = String(Math.floor(et % 1000 / 10)).padStart(2,"0");
    dis.textContent = `${h}:${m}:${s}:${ml}`;
}
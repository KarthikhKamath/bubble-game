var time=60;
var score=0
var hit

function scorer(){
    score+=10
    document.querySelector(".score").innerHTML=score;
}

function makeBubble(){
    var bubls=``;
    var num;
    for(let i=0;i<200;i++){
        num = Math.floor(Math.random()*10);
        bubls+=`<div class=bubble>${num}</div>`
}

document.querySelector("#panelBottom").innerHTML=bubls
}

function timer(){
   var inter =  setInterval(()=>{
        if(time==0){
            clearInterval(inter)
            document.querySelector("#panelBottom").innerHTML=`<div style="display:flex; font-family:'poppins'; flex-direction:column; margin:auto; gap:30px;"><h1 class="over" >Your score is ${score}</h1>
            <button onClick="window.location.reload();" class="replay">Replay</button></div>`;
            return;
        }
        time--;
        document.querySelector(".timer").innerHTML=time;
    }, 1000)
}

function getNewhit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector(".hit").innerHTML=hit
    
}
makeBubble()
timer()


document.querySelector("#panelBottom").addEventListener("click", (details)=>{
    var clickedNUm =Number(details.target.textContent)
    if(clickedNUm===hit){
        scorer();
        makeBubble()
        getNewhit()
    }
})

getNewhit()
const computerchoiseDispaly=document.getElementById('computerchoise');
const userchoiseDisplay=document.getElementById('userchoise');
const result=document.getElementById('result');
const select=document.querySelectorAll('button');

let userchoise;
let computerchoise;
select.forEach(possible);

function possible(p){
    p.addEventListener('click',()=>{
        userchoise=p.textContent;
        userchoiseDisplay.innerHTML=userchoise;
        console.log(p.textContent);
        let num=Math.floor(Math.random()*3); // to genrtate random number 

        console.log(num);
        if(num===0){
          computerchoise='Rock';
        }
        if(num===1){
            computerchoise='Paper';
        }
        if(num===2){
            computerchoise='Scissors';
        }
        computerchoiseDispaly.innerHTML=computerchoise;
        // console.log(computerchoise);
        whoWin();
     })
}

function whoWin(){
    if(userchoise==='Rock' && computerchoise==='Rock')
       result.innerHTML="It's Draw";
    if(userchoise==='Paper' && computerchoise==='Paper')
       result.innerHTML="It's Draw";
    if(userchoise==='Scissors' && computerchoise==='Scissors')
       result.innerHTML="It's Draw";

    if(userchoise==='Rock' && computerchoise==='Paper')
       result.innerHTML="Paper win";
    if(userchoise==='Rock' && computerchoise==='Scissors')
       result.innerHTML="Rock win";
    
    if(userchoise==='Paper' && computerchoise==='Scissors')
       result.innerHTML="Scissors  win";
    if(userchoise==='Paper' && computerchoise==='Rock')
       result.innerHTML="Paper win";
    
    if(userchoise==='Scissors' && computerchoise==='Paper')
       result.innerHTML="Scissor win";
    if(userchoise==='Scissors' && computerchoise==='Rock')
       result.innerHTML="Rock win";
}